"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type SearchState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "available"; value: string }
  | { kind: "taken"; value: string; suggestions: string[] };

const domainSuggestions = [".com", ".co.uk", ".com.ng"];

function normaliseDomain(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function buildSuggestions(value: string) {
  const base = value.replace(/\.[a-z.]+$/, "");
  return domainSuggestions.map((extension) => `${base}${extension}`);
}

export function DomainSearch() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<SearchState>({ kind: "idle" });

  const canSubmit = useMemo(() => normaliseDomain(query).length > 2, [query]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    const value = normaliseDomain(query);
    setState({ kind: "loading" });

    await new Promise((resolve) => setTimeout(resolve, 450));

    if (value.endsWith(".available")) {
      setState({ kind: "available", value });
      return;
    }

    setState({
      kind: "taken",
      value,
      suggestions: buildSuggestions(value),
    });
  }

  return (
    <div className="domain-search-wrap">
      <form className="domain-search-form" onSubmit={onSubmit} role="search" aria-label="Domain search">
        <label className="sr-only" htmlFor="domain-search-input">
          Enter a domain name to search
        </label>
        <div className="domain-search-field">
          <input
            id="domain-search-input"
            className="domain-search-input"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find your domain — yourbrand.ng"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          <button type="submit" className="domain-search-submit" disabled={!canSubmit}>
            Search
          </button>
        </div>
      </form>

      <p className="domain-search-sub">
        Instant availability check · WHOIS privacy included · Activate in seconds
      </p>

      <div className="domain-chip-row" aria-label="Popular domain extensions">
        <span className="domain-chip">.ng</span>
        <span className="domain-chip">.com.ng</span>
        <span className="domain-chip">.com</span>
        <span className="domain-chip">.co.uk</span>
        <span className="domain-chip">.ai</span>
      </div>

      {state.kind === "loading" ? (
        <div className="domain-result domain-result--loading" aria-live="polite">
          Checking domain availability...
        </div>
      ) : null}

      {state.kind === "available" ? (
        <div className="domain-result domain-result--available" aria-live="polite">
          <div>
            <strong>{state.value}</strong> is available.
            <p>Register it now with privacy protection and instant activation.</p>
          </div>
          <Link href={`/cart.php?a=add&domainaction=register&query=${encodeURIComponent(state.value)}`}>
            Register now
          </Link>
        </div>
      ) : null}

      {state.kind === "taken" ? (
        <div className="domain-result domain-result--taken" aria-live="polite">
          <div>
            <strong>{state.value}</strong> is already taken.
            <p>Try one of these alternatives instead.</p>
            <div className="domain-suggestion-row">
              {state.suggestions.map((suggestion) => (
                <span key={suggestion} className="domain-suggestion-chip">
                  {suggestion}
                </span>
              ))}
            </div>
          </div>
          <Link href="/domains">See alternatives</Link>
        </div>
      ) : null}
    </div>
  );
}
