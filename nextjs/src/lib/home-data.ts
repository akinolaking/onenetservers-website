export const services = [
  {
    tag: "AI Builder · Docker · PanelAlpha · LiteSpeed",
    title: "WordPress Hosting with AI Website Builder",
    description:
      "Docker-isolated containers. AI generates your full site from a prompt. One-click staging. 10–30× faster than standard shared WordPress.",
    price: { USD: "$6.78/mo", NGN: "₦10,500/mo", GBP: "£6.30/mo" },
    href: "/cart.php?a=add&pid=261&billingcycle=monthly",
    cta: "Launch WordPress",
    featured: true,
  },
  {
    tag: "NiRA Accredited · 30+ TLDs",
    title: "Domain Registration",
    description:
      ".ng, .com.ng, .ai, .dev, .co.uk and 27 more. WHOIS privacy, DNSSEC, instant activation.",
    price: { USD: "$3.42/yr", NGN: "₦5,200/yr", GBP: "£2.70/yr" },
    href: "/domains",
    cta: "Find your domain",
  },
  {
    tag: "LiteSpeed · CloudLinux · Plesk",
    title: "Web Hosting",
    description:
      "Dedicated CloudLinux environment. ImmunifyAV+ malware scanning. Not a shared-resource gamble.",
    price: { USD: "$3.99/mo", NGN: "₦7,499/mo", GBP: "£3.71/mo" },
    href: "/cart.php?a=add&pid=261&billingcycle=monthly",
    cta: "Start hosting",
  },
  {
    tag: "CrossBox · No per-user fees",
    title: "Business Email",
    description:
      "5–100 addresses on one flat plan. Video calls, team chat, and shared storage built in.",
    price: { USD: "$2.33/mo", NGN: "₦2,899/mo", GBP: "£1.79/mo" },
    href: "/cart.php?a=add&pid=261&billingcycle=monthly",
    cta: "Get email",
  },
  {
    tag: "8–96GB RAM · Unlimited Bandwidth",
    title: "Cloud VPS",
    description:
      "n8n, Docker, Wireguard, Nextcloud one-click deploy. Zero bandwidth throttling. AI-ready from VPS Lite.",
    price: { USD: "$12.42/mo", NGN: "₦19,999/mo", GBP: "£11.56/mo" },
    href: "/cart.php?a=add&pid=261&billingcycle=monthly",
    cta: "Deploy VPS",
  },
  {
    tag: "White-label · WHMCS · Private Nameservers",
    title: "Reseller Hosting",
    description:
      "Launch your own hosting brand. Full white-label, private nameservers, mobile billing app. Your infrastructure, your name.",
    price: { USD: "$5.39/mo", NGN: "₦8,999/mo", GBP: "£4.10/mo" },
    href: "/cart.php?a=add&pid=261&billingcycle=monthly",
    cta: "Start reselling",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Choose your plan",
    description:
      "Pick the product and plan that fits. All plans include a 30-day money-back guarantee — no questions, no retention team.",
  },
  {
    number: "02",
    title: "We set everything up",
    description:
      "Your environment provisions automatically. Average activation: 2–5 minutes. For migrations, our team handles files, databases, DNS, and email — at no extra charge.",
  },
  {
    number: "03",
    title: "You go live",
    description:
      "Log in to Plesk, PanelAlpha, or your client area. Your site is ready. Our support team is available 24/7.",
  },
] as const;

export const pricingCategories = [
  {
    key: "hosting",
    label: "Web Hosting",
    plans: [
      {
        name: "Starter",
        description: "Your first website deserves a real server. Solid performance. Zero complexity.",
        monthly: { USD: "$3.99/mo", NGN: "₦7,499/mo", GBP: "£3.71/mo" },
        annual: { USD: "$2.99/mo", NGN: "₦5,999/mo", GBP: "£2.79/mo" },
        renewal: "Renews at $3.99/mo after the first term.",
      },
      {
        name: "Premium",
        description:
          "The plan serious builders choose. Managed for performance with CloudLinux isolation and ImmunifyAV+.",
        monthly: { USD: "$18.20/mo", NGN: "₦24,999/mo", GBP: "£16.95/mo" },
        annual: { USD: "$11.83/mo", NGN: "₦15,999/mo", GBP: "£10.75/mo" },
        renewal: "Renews at $18.20/mo after the first term.",
        featured: true,
      },
    ],
  },
  {
    key: "wordpress",
    label: "WordPress",
    plans: [
      {
        name: "WP Starter",
        description: "AI website builder, Docker isolation, and a cleaner path to launch.",
        monthly: { USD: "$6.78/mo", NGN: "₦10,500/mo", GBP: "£6.30/mo" },
        annual: { USD: "$5.10/mo", NGN: "₦7,999/mo", GBP: "£4.70/mo" },
        renewal: "Renews at $6.78/mo after the first term.",
      },
      {
        name: "WP Premium",
        description: "Five instances, staging, and room to scale without losing speed.",
        monthly: { USD: "$52.49/mo", NGN: "₦74,999/mo", GBP: "£48.10/mo" },
        annual: { USD: "$39.20/mo", NGN: "₦55,999/mo", GBP: "£35.95/mo" },
        renewal: "Renews at $52.49/mo after the first term.",
        featured: true,
      },
    ],
  },
  {
    key: "vps",
    label: "Cloud VPS",
    plans: [
      {
        name: "VPS Starter",
        description: "Root access, unlimited bandwidth, and one-click apps in under a minute.",
        monthly: { USD: "$12.42/mo", NGN: "₦19,999/mo", GBP: "£11.56/mo" },
        annual: { USD: "$9.99/mo", NGN: "₦15,999/mo", GBP: "£8.95/mo" },
        renewal: "Renews at $12.42/mo after the first term.",
      },
      {
        name: "VPS Premium",
        description: "48GB RAM, 12 vCPU, and the headroom for demanding automation and AI workloads.",
        monthly: { USD: "$43.61/mo", NGN: "₦67,999/mo", GBP: "£40.55/mo" },
        annual: { USD: "$33.99/mo", NGN: "₦52,999/mo", GBP: "£31.70/mo" },
        renewal: "Renews at $43.61/mo after the first term.",
        featured: true,
      },
    ],
  },
  {
    key: "domains",
    label: "Domains",
    plans: [
      {
        name: ".com.ng",
        description: "A practical first domain for businesses selling in Nigeria.",
        monthly: { USD: "$11.25/yr", NGN: "₦20,750/yr", GBP: "£10.47/yr" },
        annual: { USD: "$11.25/yr", NGN: "₦20,750/yr", GBP: "£10.47/yr" },
        renewal: "Renews at the same annual rate shown.",
      },
      {
        name: ".ng",
        description: "Direct NiRA registration for stronger local trust and recognition.",
        monthly: { USD: "$23.40/yr", NGN: "₦43,000/yr", GBP: "£21.79/yr" },
        annual: { USD: "$23.40/yr", NGN: "₦43,000/yr", GBP: "£21.79/yr" },
        renewal: "Renews at the same annual rate shown.",
        featured: true,
      },
    ],
  },
] as const;

export const nigeriaPoints = [
  "Pay in naira via Paystack — no international card, no conversion fees, no payment friction.",
  "NiRA accredited registrar — direct .ng and .com.ng registration with no middleman layer.",
  "SCUML registered — compliant and protected under Nigerian law.",
  "Digital Identity Initiative — free first year online for qualifying founders, students, and freelancers.",
  "Local support awareness — our team understands Paystack, Nigerian business hours, and local domain requirements.",
] as const;
