"use client";

import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";

const CARDS = [
  {
    key:         "hosting",
    href:        "/hosting/web",
    label:       "Web Hosting",
    headline:    "Your site. Fast, secure, live.",
    description: "LiteSpeed + CloudLinux isolation. Free SSL, daily backups, and a free domain on every plan.",
    image:       "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt:    "Data centre servers with blue lighting",
    objectPos:   "center",
    chipColor:   "#4343F0",
    chipBg:      "#EEEEFF",
  },
  {
    key:         "domain",
    href:        "/domains",
    label:       "Domain Registration",
    headline:    "Own the name that matters.",
    description: "NiRA-accredited .ng registrar. Search 500+ TLDs with instant WHOIS privacy included.",
    image:       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    imageAlt:    "Globe and digital network representing internet domains",
    objectPos:   "center",
    chipColor:   "#059669",
    chipBg:      "#ECFDF5",
  },
  {
    key:         "email",
    href:        "/email",
    label:       "Business Email",
    headline:    "Inbox that means business.",
    description: "Up to 100 addresses, no per-user fees. Webmail, mobile app, and video calls built in.",
    image:       "https://images.unsplash.com/photo-1596526131083-e8c633964948?auto=format&fit=crop&w=800&q=80",
    imageAlt:    "Professional working on laptop with business email open",
    objectPos:   "center top",
    chipColor:   "#7C3AED",
    chipBg:      "#F5F3FF",
  },
  {
    key:         "vps",
    href:        "/hosting/vps",
    label:       "Cloud VPS",
    headline:    "Root access. Zero limits.",
    description: "8 GB RAM · 4 vCPU · unlimited bandwidth. Docker, n8n, and Nextcloud, one click away.",
    image:       "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    imageAlt:    "Terminal screen showing server commands and code",
    objectPos:   "center top",
    chipColor:   "#0369A1",
    chipBg:      "#E0F2FE",
  },
] as const;

export function PricingBestsellers() {
  return (
    <section className="feat-section homepage-section" id="products" aria-label="Products">
      <div className="shell">
        <Fade inView inViewOnce>
          <div className="section-header section-header--centered">
            <div className="eyebrow eyebrow--centered">What we offer</div>
            <h2>Everything your business needs online.</h2>
            <p className="lead">
              Hosting, domains, email, and infrastructure. Built for Nigeria, the UK, and everywhere in between.
            </p>
          </div>
        </Fade>

        <div className="feat-grid">
          {CARDS.map((card, i) => (
            <Fade key={card.key} inView inViewOnce delay={i * 80}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: "16px",
                  border: "1px solid var(--line)",
                  height: "100%",
                  transition: "box-shadow 0.22s ease, transform 0.22s ease",
                  "&:hover": {
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                    transform: "translateY(-3px)",
                  },
                  bgcolor: "#fff",
                  overflow: "hidden",
                }}
              >
                <CardActionArea
                  component={Link}
                  href={card.href}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    "& .MuiCardActionArea-focusHighlight": { borderRadius: "16px" },
                  }}
                >
                  {/* Image */}
                  <div className="feat-card__img-wrap">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="feat-card__img"
                      style={{ objectPosition: card.objectPos }}
                    />
                    {/* Category chip over image */}
                    <Chip
                      label={card.label}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        zIndex: 1,
                        bgcolor: "rgba(255,255,255,0.92)",
                        color: card.chipColor,
                        fontWeight: 500,
                        fontSize: "11px",
                        height: "24px",
                        backdropFilter: "blur(6px)",
                        "& .MuiChip-label": { px: "10px" },
                        border: `1px solid ${card.chipColor}22`,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <CardContent
                    sx={{
                      p: "20px 20px 22px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      flex: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--ink)",
                        lineHeight: 1.3,
                        fontFamily: "var(--font-ui), system-ui, sans-serif",
                      }}
                    >
                      {card.headline}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "13px",
                        color: "var(--body)",
                        lineHeight: 1.65,
                        flex: 1,
                        fontFamily: "var(--font-ui), system-ui, sans-serif",
                      }}
                    >
                      {card.description}
                    </Typography>

                    <Typography
                      component="span"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "12.5px",
                        fontWeight: 500,
                        color: card.chipColor,
                        mt: "6px",
                        fontFamily: "var(--font-ui), system-ui, sans-serif",
                      }}
                    >
                      Explore
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
