/* TLD pricing — USD baseline from WHMCS (CONTENT.md §TLD Pricing Grid) */
export const tlds = [
  { ext: ".ng",      usd: 23.40, note: "NiRA" },
  { ext: ".com",     usd: 15.00, note: "" },
  { ext: ".com.ng",  usd: 11.25, note: "NiRA" },
  { ext: ".co.uk",   usd: 8.12,  note: "" },
  { ext: ".uk",      usd: 8.12,  note: "" },
  { ext: ".shop",    usd: 4.99,  note: "" },
  { ext: ".online",  usd: 3.80,  note: "" },
  { ext: ".xyz",     usd: 3.42,  note: "Lowest" },
  { ext: ".cloud",   usd: 6.99,  note: "" },
  { ext: ".dev",     usd: 19.04, note: "" },
  { ext: ".tech",    usd: 10.79, note: "" },
  { ext: ".me",      usd: 12.69, note: "" },
  { ext: ".io",      usd: 44.44, note: "" },
  { ext: ".ai",      usd: 95.24, note: "" },
  { ext: ".net",     usd: 15.05, note: "" },
  { ext: ".org",     usd: 13.58, note: "" },
  { ext: ".name.ng", usd: 0,     note: "DII free" },
] as const;

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

export const trustBarItems = [
  { label: "Free domain included", detail: "with all hosting plans" },
  { label: "SSL security built in", detail: "automatic HTTPS on every site" },
  { label: "Live in under 10 minutes", detail: "no developer needed" },
  { label: "Nigeria · UK · Global", detail: "built for both markets" },
  { label: "NiRA accredited registrar", detail: "official .ng registry partner" },
  { label: "30-day money-back guarantee", detail: "no questions, no retention team" },
] as const;

export const valueCards = [
  {
    key: "who",
    headline: "Built for Nigeria. Powered from London.",
    body: "The only UK-registered hosting provider with NiRA accreditation, Naira billing via Paystack, and .ng domain expertise. No conversion fees. No workarounds.",
    featured: false,
  },
  {
    key: "mission",
    headline: "We handle the tech. You run your business.",
    body: "Servers, domains, SSL, and email — all managed by us. Nigerian and UK businesses deserve to focus on what they're actually good at, not infrastructure.",
    cta: { label: "Get started free", href: "/cart.php?a=add&pid=261&billingcycle=annually" },
    featured: true,
  },
  {
    key: "speed",
    headline: "10 minutes. From signup to live website.",
    body: "No developer. No waiting. Pick a template, add your details, publish — before your coffee gets cold.",
    featured: false,
  },
  {
    key: "free",
    headline: "₦0. Your first year online. On us.",
    body: "Free domain, hosting, and business email for qualifying Nigerian founders, students, and freelancers through the Digital Identity Initiative. No credit card required.",
    cta: { label: "Apply free →", href: "/digital-identity" },
    featured: false,
  },
  {
    key: "community",
    headline: "Infrastructure for builders. Community for growth.",
    body: "Monthly events on AI, identity, and internet infrastructure — open to all builders. SDG 4, 8, and 10 aligned.",
    cta: { label: "View upcoming events →", href: "/community" },
    featured: false,
  },
] as const;

export const newSteps = [
  {
    number: "01",
    title: "Enter your business name",
    description:
      "Search for your domain across .ng, .com, .co.uk, and 30+ extensions. We check availability instantly and suggest the best fit for your brand.",
    time: "under 1 minute",
  },
  {
    number: "02",
    title: "Choose a website template",
    description:
      "Pick from templates built for your industry — restaurant, services, retail, portfolio. Let AI build the rest for you with customisable blocks and text. No design skills. No code. Click, customise, done.",
    time: "2–3 minutes",
  },
  {
    number: "03",
    title: "Add your details and go live",
    description:
      "Your name, products, story. Add your social media links or booking link. Hit publish — your business is on the internet.",
    time: "10 minutes total",
  },
] as const;

export const differentiators = [
  {
    icon: "gift",
    size: "large",
    headline: "Free for 1 full year.",
    body: "Domain, hosting, and business email — free for your first year. No credit card to start. No hidden renewal trap.",
    tag: "Starter offer",
  },
  {
    icon: "naira",
    size: "normal",
    headline: "Pay in Naira, GBP, or USD.",
    body: "Paystack, PayPal, and Stripe all supported. Cards, bank transfer, USSD, and Verve. No conversion fees.",
    tag: "Multi-currency",
  },
  {
    icon: "shield",
    size: "normal",
    headline: "NiRA-accredited registrar.",
    body: "Direct .ng, .com.ng, and .gov.ng registry access. Faster activation, no third-party layer. Full WHOIS privacy.",
    tag: "Official registry",
  },
  {
    icon: "itana",
    size: "large",
    headline: "Itana Digital Resident.",
    body: "Resident of Africa's first Digital Special Economic Zone. Supporting founders operating in the zone and beyond — with a platform built for cross-border digital business.",
    tag: "Africa's first Digital SEZ",
  },
  {
    icon: "technation",
    size: "large",
    headline: "Tech Nation Endorsed Founder.",
    body: "Recognised by the UK Home Office under the same programme that backed Revolut, Monzo, ElevenLabs, and Just Eat. Your hosting provider is in that company.",
    tag: "UK Home Office recognised",
  },
  {
    icon: "support",
    size: "normal",
    headline: "Human support under 2 hours.",
    body: "Real engineers from Lagos and London. Not bots. Not offshore scripts. People who understand your business context.",
    tag: "<2hr response",
  },
  {
    icon: "globe",
    size: "normal",
    headline: "9 regions. 99.9% uptime SLA.",
    body: "Infrastructure across Europe, US, Asia, Africa, and Oceania. One platform, nine regions, zero switching.",
    tag: "Global infrastructure",
  },
] as const;

export const testimonials = [
  {
    name: "Chidimma Okafor",
    role: "Founder",
    business: "Mama Chidi's Kitchen",
    category: "Food & Catering, Lagos",
    categoryKey: "food",
    story:
      "A home caterer who had been taking orders via WhatsApp alone. Now has a full menu online, accepts bookings, and reaches new customers daily.",
    quote:
      "I was scared of the tech. I had my website running before I finished my morning tea.",
    time: "Launched in 8 minutes",
  },
  {
    name: "Bridget",
    role: "Designer & Founder",
    business: "The BB Bespokes",
    category: "Fashion & Retail, London",
    categoryKey: "fashion",
    story:
      "A fabric designer selling textiles from her studio. She went from Instagram DMs to a WooCommerce storefront that ships across the UK and beyond.",
    quote:
      "My international customers found me through Google. I didn't think that was possible for someone like me.",
    time: "Launched in 6 minutes",
  },
  {
    name: "Emeka Okonkwo",
    role: "Founder",
    business: "Emeka Tax Advisory",
    category: "Professional Services, Abuja",
    categoryKey: "services",
    story:
      "A one-man accounting firm that needed credibility online. The website helped him land two corporate clients in his first month.",
    quote: "It made me look like a real company. Because I am one.",
    time: "Launched in 11 minutes",
  },
] as const;

export const quoteTestimonials = [
  {
    quote:
      "Migrated from Bluehost, load time dropped from four seconds to under 800ms. The team handled the move without us chasing tickets.",
    name: "Adebola O.",
    role: "E-commerce founder",
    location: "Lagos",
  },
  {
    quote:
      "We needed a domain, email, and a cleaner front door for UK clients. OneNet made the business look more established in the first week.",
    name: "Sarah M.",
    role: "Consultant",
    location: "London",
  },
  {
    quote:
      "The .ng registration was fast, billing in naira was straightforward, and support answered in language that made operational sense.",
    name: "Emeka T.",
    role: "Business owner",
    location: "Abuja",
  },
  {
    quote:
      "We started with shared hosting, added business email, then moved to VPS. It felt like one platform, not three stitched together.",
    name: "Chisom A.",
    role: "Agency founder",
    location: "Port Harcourt",
  },
] as const;
