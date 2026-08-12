export type ProjectMetric = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  note: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  brand: string;
  industry: string;
  objective: string;
  challenge: string;
  strategy: string;
  channels: string[];
  role: string;
  metrics: ProjectMetric[];
  accent: string;
  surface: string;
  visualType: "search" | "app" | "commerce" | "lead" | "website";
};

export const siteContent = {
  name: "Phu Hoang",
  role: "Digital Performance Marketer",
  positioning: "Strategy · Media · Measurement · Growth",
  status: "Available for select opportunities",
  email: "phu.hoang@example.com",
  linkedin: "https://www.linkedin.com/",
  intro:
    "I connect media strategy, campaign execution, and measurement into one accountable growth system—turning audience signals into decisions that compound.",
  tools: ["Google Ads", "Meta", "TikTok", "AppsFlyer", "GA4", "CM360", "Performance Marketing"],
  expertise: [
    "Full-funnel media planning",
    "Paid search & social",
    "App growth & acquisition",
    "Conversion measurement",
    "Experiment design",
    "Performance storytelling",
  ],
  markets: ["Vietnam", "Southeast Asia", "Cross-market campaigns"],
  process: ["Insight", "Strategy", "Activation", "Measurement", "Growth"],
};

export const projects: Project[] = [
  {
    slug: "ai-max-performance-test",
    number: "01",
    title: "AI Max Performance Test",
    brand: "Confidential client · Sample case",
    industry: "Financial services",
    objective: "Test whether expanded AI-led search coverage could unlock incremental qualified demand.",
    challenge: "Protect intent quality while expanding beyond a mature keyword structure and tightly governed efficiency target.",
    strategy: "Built a controlled test framework, segmented query themes, aligned landing-page signals, and monitored incrementality alongside conversion quality.",
    channels: ["Google Ads", "GA4", "CM360"],
    role: "Test design, activation, measurement, optimization",
    metrics: [
      { label: "Conversion lift", value: 24, suffix: "%", note: "Illustrative placeholder" },
      { label: "CPA change", value: 12, prefix: "−", suffix: "%", note: "Illustrative placeholder" },
      { label: "Test confidence", value: 95, suffix: "%", note: "Illustrative placeholder" },
    ],
    accent: "#F5A313",
    surface: "#D5BDA7",
    visualType: "search",
  },
  {
    slug: "app-install-ekyc-campaign",
    number: "02",
    title: "App Install and eKYC Campaign",
    brand: "Confidential client · Sample case",
    industry: "Fintech",
    objective: "Move beyond low-cost installs toward verified, high-intent customer acquisition.",
    challenge: "Fragmented post-install signals made it difficult to distinguish volume from valuable acquisition.",
    strategy: "Reframed optimization around the eKYC journey, mapped events in AppsFlyer, and built creative cohorts around trust, utility, and onboarding ease.",
    channels: ["Meta", "TikTok", "AppsFlyer"],
    role: "Media strategy, event design, campaign optimization",
    metrics: [
      { label: "eKYC rate", value: 31, suffix: "%", note: "Illustrative placeholder" },
      { label: "Cost per eKYC", value: 18, prefix: "−", suffix: "%", note: "Illustrative placeholder" },
      { label: "Install volume", value: 42, prefix: "+", suffix: "%", note: "Illustrative placeholder" },
    ],
    accent: "#92482D",
    surface: "#F4EEE2",
    visualType: "app",
  },
  {
    slug: "ecommerce-performance-campaign",
    number: "03",
    title: "E-commerce Performance Campaign",
    brand: "Confidential client · Sample case",
    industry: "Retail & e-commerce",
    objective: "Increase revenue efficiently across prospecting, consideration, and remarketing demand.",
    challenge: "Promotional peaks obscured baseline growth and created volatile budget allocation across channels.",
    strategy: "Separated always-on and event demand, introduced marginal ROAS guardrails, and synchronized audience, catalog, and creative refresh cycles.",
    channels: ["Google Ads", "Meta", "GA4"],
    role: "Planning, activation, trading, performance reporting",
    metrics: [
      { label: "ROAS", value: 4.8, suffix: "×", note: "Illustrative placeholder" },
      { label: "Revenue growth", value: 36, prefix: "+", suffix: "%", note: "Illustrative placeholder" },
      { label: "CPA change", value: 14, prefix: "−", suffix: "%", note: "Illustrative placeholder" },
    ],
    accent: "#F5A313",
    surface: "#9E8F74",
    visualType: "commerce",
  },
  {
    slug: "lead-generation-strategy",
    number: "04",
    title: "Lead Generation Strategy",
    brand: "Confidential client · Sample case",
    industry: "Education & services",
    objective: "Build a qualified lead engine with a clearer link between media, sales readiness, and enrollment value.",
    challenge: "Top-line CPL hid major differences in lead quality across messages, forms, and audience sources.",
    strategy: "Introduced lead-quality stages, landing-page experiments, negative audience rules, and a weekly media-to-sales feedback loop.",
    channels: ["Meta", "Google Ads", "CRM data"],
    role: "Growth strategy, funnel design, optimization",
    metrics: [
      { label: "Qualified leads", value: 29, prefix: "+", suffix: "%", note: "Illustrative placeholder" },
      { label: "Cost per SQL", value: 21, prefix: "−", suffix: "%", note: "Illustrative placeholder" },
      { label: "Landing CVR", value: 7.4, suffix: "%", note: "Illustrative placeholder" },
    ],
    accent: "#92482D",
    surface: "#D5BDA7",
    visualType: "lead",
  },
  {
    slug: "joystay-conversion-tracking",
    number: "05",
    title: "Joystay Website and Conversion Tracking",
    brand: "Joystay · Portfolio placeholder",
    industry: "Travel & hospitality",
    objective: "Create a clearer booking journey and a measurement foundation for future paid growth.",
    challenge: "The experience needed to communicate trust and inventory value while capturing meaningful conversion intent.",
    strategy: "Mapped the decision journey, prioritized high-intent content, and designed a GA4 event model for discovery, property interest, and booking actions.",
    channels: ["Website strategy", "GA4", "Tag management"],
    role: "Conversion strategy, UX direction, measurement plan",
    metrics: [
      { label: "Tracked events", value: 12, note: "Illustrative placeholder" },
      { label: "Inquiry CVR", value: 6.2, suffix: "%", note: "Illustrative placeholder" },
      { label: "Data coverage", value: 100, suffix: "%", note: "Illustrative placeholder" },
    ],
    accent: "#F5A313",
    surface: "#F4EEE2",
    visualType: "website",
  },
];

export const capabilities = [
  { title: "Media Planning", copy: "Translate commercial ambition into channel roles, audience priorities, and an accountable investment plan.", project: 0 },
  { title: "Campaign Activation", copy: "Build clean, scalable structures with strong naming, governance, creative mapping, and launch discipline.", project: 1 },
  { title: "Performance Optimization", copy: "Find the constraint, design the test, and move budget toward the next best unit of growth.", project: 2 },
  { title: "Tracking and Measurement", copy: "Connect events, attribution, and reporting so every optimization has a dependable signal.", project: 4 },
  { title: "Reporting and Insights", copy: "Turn performance movement into a clear story: what happened, why it matters, and what happens next.", project: 3 },
  { title: "Website and Landing Page Strategy", copy: "Shape the post-click experience around intent, message continuity, trust, and conversion clarity.", project: 4 },
];

export const experience = [
  {
    period: "Recent",
    role: "Digital Performance Marketing",
    company: "Experience details to be supplied",
    summary: "Planning and activating measurable acquisition programs across search, social, app, and web journeys.",
    context: "Finance · E-commerce · Apps",
    preview: "Media systems",
  },
  {
    period: "Earlier",
    role: "Campaign & Analytics Practice",
    company: "Experience details to be supplied",
    summary: "Developing measurement frameworks, reporting narratives, and structured optimization rhythms for multi-channel teams.",
    context: "Vietnam · Southeast Asia",
    preview: "Measurement craft",
  },
  {
    period: "Foundation",
    role: "Digital Growth & Web Strategy",
    company: "Experience details to be supplied",
    summary: "Connecting creative, landing-page experience, and media data to improve conversion quality.",
    context: "Web · Lead gen · Commerce",
    preview: "Growth journeys",
  },
];

export const performanceResults = [
  { label: "ROAS", value: 4.8, suffix: "×", delta: "+1.6×", context: "Illustrative commerce efficiency after budget reallocation.", bars: [32, 46, 43, 68, 78, 92] },
  { label: "CPA", value: 18, prefix: "−", suffix: "%", delta: "vs. baseline", context: "Illustrative acquisition cost movement after query and audience refinement.", bars: [84, 76, 68, 63, 58, 51] },
  { label: "CTR", value: 32, prefix: "+", suffix: "%", delta: "creative lift", context: "Illustrative click-through improvement from message and format testing.", bars: [31, 42, 38, 57, 62, 74] },
  { label: "CVR", value: 7.4, suffix: "%", delta: "+2.1 pts", context: "Illustrative landing-page conversion after intent-led restructuring.", bars: [39, 45, 52, 58, 67, 82] },
];

export const placeholderAssets = [
  { key: "portrait", current: "CSS editorial silhouette", replacement: "Transparent PNG/WebP portrait, 1600 × 2000 px" },
  { key: "project-ai-max", current: "CSS search campaign board", replacement: "Campaign screenshot or approved mockup, 1800 × 1200 px" },
  { key: "project-app-ekyc", current: "CSS mobile device journey", replacement: "Three app screens, 1170 × 2532 px each" },
  { key: "project-commerce", current: "CSS commerce performance collage", replacement: "Campaign/commerce visual, 1800 × 1350 px" },
  { key: "project-leads", current: "CSS lead funnel composition", replacement: "Landing page or reporting visual, 1800 × 1200 px" },
  { key: "project-joystay", current: "CSS browser and tracking map", replacement: "Website capture, 1920 × 1200 px" },
  { key: "cv", current: "Downloadable placeholder note", replacement: "Final PDF named phu-hoang-cv.pdf" },
];
