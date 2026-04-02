"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, MessageCircle, Phone, X } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  currencies,
  navGroups,
  quickActions,
  socialLinks,
  type Currency,
} from "@/lib/site-data";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState<Currency>("USD");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
        <div className="shell nav-shell">
          <Link href="/" className="nav-brand" aria-label="OneNet Servers home">
            <Image src="/assets/logo-mark.svg" alt="OneNet Servers" width={34} height={35} priority />
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            <div className="nav-menu-list">
              {hasMounted
                ? navGroups.map((group) => (
                    <DropdownMenu key={group.title}>
                      <DropdownMenuTrigger className="nav-trigger">
                        {group.title}
                        <ChevronDown className="h-3 w-3" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="center"
                        sideOffset={12}
                        className={`nav-dropdown-panel ${
                          group.title === "Hosting" ? "nav-dropdown-panel--wide" : ""
                        }`}
                      >
                        <div
                          className={
                            group.title === "Hosting"
                              ? "nav-dropdown-grid nav-dropdown-grid--wide"
                              : "nav-dropdown-grid"
                          }
                        >
                          {group.items.map((item) =>
                            item.disabled ? (
                              <span
                                key={item.label}
                                className="nav-dropdown-item nav-dropdown-item--disabled"
                              >
                                <span className="nav-dropdown-copy">
                                  <strong>{item.label}</strong>
                                  {item.description ? <em>{item.description}</em> : null}
                                </span>
                              </span>
                            ) : (
                              <Link key={item.label} href={item.href} className="nav-dropdown-item">
                                <span className="nav-dropdown-copy">
                                  <strong>{item.label}</strong>
                                  {item.description ? <em>{item.description}</em> : null}
                                </span>
                              </Link>
                            ),
                          )}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ))
                : navGroups.map((group) => (
                    <button key={group.title} type="button" className="nav-trigger" aria-label={group.title}>
                      {group.title}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                  ))}
            </div>
          </nav>

          <div className="nav-actions">
            {hasMounted ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="currency-trigger">
                  {activeCurrency}
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={10}
                  className="currency-menu currency-menu--open"
                >
                  {currencies.map((currency) => (
                    <DropdownMenuItem
                      key={currency}
                      className={`currency-option ${
                        activeCurrency === currency ? "currency-option--active" : ""
                      }`}
                      onClick={() => setActiveCurrency(currency)}
                    >
                      <span>{currency}</span>
                      {activeCurrency === currency ? <span>Selected</span> : null}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button type="button" className="currency-trigger" aria-label={`Currency ${activeCurrency}`}>
                {activeCurrency}
                <ChevronDown className="h-3 w-3" />
              </button>
            )}

            <Link href="/login.php" className="nav-secondary-link">
              Log in
            </Link>
            <Link href="/cart.php?a=add&pid=261&billingcycle=monthly" className="nav-primary-link">
              Get started free
            </Link>
          </div>

          {hasMounted ? (
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className={`nav-toggle ${mobileOpen ? "nav-toggle--open" : ""}`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                <span />
                <span />
                <span />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="mobile-sheet"
                showCloseButton={false}
              >
                <SheetHeader className="mobile-drawer-head">
                  <div>
                    <span className="mobile-kicker">OneNet Servers</span>
                    <SheetTitle className="mobile-sheet-title">Menu</SheetTitle>
                  </div>
                  <SheetClose className="mobile-close" aria-label="Close menu">
                    <X className="h-4 w-4" />
                  </SheetClose>
                </SheetHeader>

                <div className="mobile-drawer-body">
                  <div className="mobile-quick-actions">
                    {quickActions.map((action) => (
                      <a key={action.label} href={action.href} className="mobile-quick-action">
                        {action.label.includes("Call") ? (
                          <Phone className="h-4 w-4" />
                        ) : (
                          <MessageCircle className="h-4 w-4" />
                        )}
                        <span>{action.label}</span>
                      </a>
                    ))}
                  </div>

                  <div className="mobile-menu-grid">
                    {navGroups.map((group) => (
                      <details key={group.title} className="mobile-group" open={group.title === "Hosting"}>
                        <summary>
                          <span>{group.title}</span>
                          <ChevronDown className="h-4 w-4" />
                        </summary>
                        <div className="mobile-links">
                          {group.items.map((item) =>
                            item.disabled ? (
                              <span key={item.label} className="mobile-link mobile-link--disabled">
                                <strong>{item.label}</strong>
                                {item.description ? <em>{item.description}</em> : null}
                              </span>
                            ) : (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="mobile-link"
                                onClick={() => setMobileOpen(false)}
                              >
                                <strong>{item.label}</strong>
                                {item.description ? <em>{item.description}</em> : null}
                              </Link>
                            ),
                          )}
                        </div>
                      </details>
                    ))}
                  </div>

                  <div className="mobile-currency">
                    <p>Currency</p>
                    <div className="mobile-currency-grid">
                      {currencies.map((currency) => (
                        <button
                          key={currency}
                          type="button"
                          className={`currency-pill ${
                            activeCurrency === currency ? "currency-pill--active" : ""
                          }`}
                          onClick={() => setActiveCurrency(currency)}
                        >
                          {currency}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mobile-socials" aria-label="Social links">
                    {socialLinks.map((link) => (
                      <a key={link.label} href={link.href} className="mobile-social">
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <div className="mobile-actions">
                    <Link
                      href="/login.php"
                      className="nav-secondary-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link
                      href="/register.php"
                      className="nav-secondary-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      Create account
                    </Link>
                    <Link
                      href="/cart.php?a=add&pid=261&billingcycle=monthly"
                      className="nav-primary-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      Get started free
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <button type="button" className="nav-toggle" aria-label="Open menu">
              <span />
              <span />
              <span />
            </button>
          )}
        </div>
      </header>
    </>
  );
}
