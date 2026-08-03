export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  icon: string;
  heroImage: string;
  accent: string;
  accentLight: string;
  features: string[];
  highlights: { title: string; desc: string }[];
  stats: ServiceStat[];
  steps: ServiceStep[];
  extra: Record<string, string[] | { title: string; desc: string }[]>;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    slug: "home-loan-assistance",
    title: "Home Loan Assistance",
    tagline: "Finance Your Dream Home",
    shortDescription:
      "Compare offers from top banks and get the best interest rates with end-to-end loan processing support.",
    description:
      "Buying a home is one of the biggest financial decisions you'll make. Our home loan experts partner with leading banks and NBFCs to find you the most competitive rates, lowest processing fees, and fastest approvals.",
    icon: "Landmark",
    heroImage: "/images/serve_2.jpg",
    accent: "#1e40af",
    accentLight: "#eff6ff",
    features: [
      "Pre-approved loan eligibility check",
      "Comparison across 15+ partner banks",
      "Documentation & application support",
      "Balance transfer & top-up assistance",
    ],
    highlights: [
      { title: "Best Rate Guarantee", desc: "Lowest applicable interest rate negotiated for you." },
      { title: "Fast Processing", desc: "Sanction in 7–14 working days with full paperwork support." },
      { title: "Zero Hidden Charges", desc: "Full transparency on fees, stamp duty, and legal costs." },
    ],
    stats: [
      { value: "8.35%", label: "Rates from" },
      { value: "15+", label: "Partner Banks" },
      { value: "7–14", label: "Days to Sanction" },
      { value: "₹5Cr", label: "Max Loan Amount" },
    ],
    steps: [
      { step: "01", title: "Eligibility Check", desc: "Free assessment of your loan eligibility and credit profile." },
      { step: "02", title: "Bank Comparison", desc: "We compare rates, fees, and terms across 15+ lenders." },
      { step: "03", title: "Documentation", desc: "Complete paperwork handled — income proof, KYC, property docs." },
      { step: "04", title: "Disbursement", desc: "Loan sanctioned and disbursed directly to builder or seller." },
    ],
    extra: {
      partners: ["HDFC Bank", "SBI", "ICICI Bank", "Axis Bank", "LIC Housing", "PNB Housing"],
      loanTypes: ["Home Purchase Loan", "Construction Loan", "Balance Transfer", "Top-Up Loan", "Plot + Construction"],
    },
  },
  {
    id: 2,
    slug: "legal-verification",
    title: "Legal Verification",
    tagline: "Buy With Complete Confidence",
    shortDescription:
      "Thorough title checks, RERA compliance, and documentation review before you sign anything.",
    description:
      "Every property must pass our legal verification before we recommend it. Our in-house legal team checks title deeds, encumbrance certificates, builder approvals, and RERA registration — protecting you from costly surprises.",
    icon: "Scale",
    heroImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop",
    accent: "#047857",
    accentLight: "#ecfdf5",
    features: [
      "Title deed & ownership verification",
      "RERA registration check",
      "Encumbrance certificate review",
      "Sale agreement drafting support",
    ],
    highlights: [
      { title: "Certified Legal Team", desc: "Property lawyers specializing in Delhi NCR transactions." },
      { title: "Due Diligence Report", desc: "Detailed written legal status report before you commit." },
      { title: "Registry Support", desc: "End-to-end assistance from agreement to registration." },
    ],
    stats: [
      { value: "500+", label: "Properties Verified" },
      { value: "100%", label: "RERA Compliance" },
      { value: "48hr", label: "Report Turnaround" },
      { value: "0", label: "Legal Disputes" },
    ],
    steps: [
      { step: "01", title: "Document Collection", desc: "Gather title deed, EC, approvals, and builder NOC." },
      { step: "02", title: "Title Search", desc: "30-year chain of ownership verified at sub-registrar office." },
      { step: "03", title: "Compliance Check", desc: "RERA, building plan approval, and environmental clearance." },
      { step: "04", title: "Legal Report", desc: "Comprehensive due diligence report with clear go/no-go recommendation." },
    ],
    extra: {
      documents: [
        "Sale Deed / Title Deed",
        "Encumbrance Certificate (EC)",
        "RERA Registration Certificate",
        "Building Plan Approval",
        "NOC from Builder/Society",
        "Property Tax Receipts",
      ],
    },
  },
  {
    id: 3,
    slug: "property-valuation",
    title: "Property Valuation",
    tagline: "Know The True Market Value",
    shortDescription:
      "Accurate market valuation for buying, selling, or refinancing your property.",
    description:
      "Know the true worth of any property before you buy or sell. Our valuation experts use comparable sales data, location analysis, and market trends to deliver bank-accepted reports within 48 hours.",
    icon: "BadgeDollarSign",
    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    accent: "#0f766e",
    accentLight: "#f0fdfa",
    features: [
      "Market-comparable analysis",
      "Bank-approved valuation reports",
      "Rental yield estimation",
      "Future appreciation forecast",
    ],
    highlights: [
      { title: "Data-Driven Accuracy", desc: "Based on 500+ recent transactions in your locality." },
      { title: "48-Hour Turnaround", desc: "Quick reports for urgent buying or selling decisions." },
      { title: "Negotiation Edge", desc: "Use our report to negotiate confidently." },
    ],
    stats: [
      { value: "500+", label: "Comps Analysed" },
      { value: "48hr", label: "Report Delivery" },
      { value: "98%", label: "Accuracy Rate" },
      { value: "50+", label: "Localities Covered" },
    ],
    steps: [
      { step: "01", title: "Site Inspection", desc: "Physical visit to assess condition, floor, and amenities." },
      { step: "02", title: "Market Analysis", desc: "Compare with 10+ recent sales in the same micro-market." },
      { step: "03", title: "Report Generation", desc: "Detailed valuation report with price range and justification." },
      { step: "04", title: "Advisory Call", desc: "Walk-through of findings and negotiation strategy." },
    ],
    extra: {
      factors: [
        { title: "Location & Connectivity", desc: "Metro, highways, schools, hospitals within 2km radius." },
        { title: "Property Age & Condition", desc: "Construction quality, maintenance, and renovation history." },
        { title: "Floor & Facing", desc: "Premium for higher floors, corner units, and preferred facing." },
        { title: "Amenities & Society", desc: "Clubhouse, parking, security, and builder reputation." },
      ],
    },
  },
  {
    id: 4,
    slug: "investment-advisory",
    title: "Investment Advisory",
    tagline: "Grow Your Wealth Through Real Estate",
    shortDescription:
      "Strategic guidance to pick properties with strong appreciation and rental yield.",
    description:
      "Real estate investing requires more than gut feeling. Our advisors analyze micro-markets, infrastructure pipelines, builder track records, and rental demand to recommend properties with the best long-term returns.",
    icon: "TrendingUp",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    accent: "#b45309",
    accentLight: "#fffbeb",
    features: [
      "Portfolio strategy planning",
      "Micro-market analysis reports",
      "ROI & rental yield projections",
      "Exit strategy consultation",
    ],
    highlights: [
      { title: "Market Intelligence", desc: "16+ years of on-ground data across Delhi NCR." },
      { title: "Personalized Strategy", desc: "Tailored to your budget, timeline, and risk appetite." },
      { title: "Post-Purchase Support", desc: "Track performance and suggest optimizations." },
    ],
    stats: [
      { value: "12–16%", label: "Avg. Rental Yield" },
      { value: "8–12%", label: "Annual Appreciation" },
      { value: "16+", label: "Years Experience" },
      { value: "₹500Cr+", label: "Assets Advised" },
    ],
    steps: [
      { step: "01", title: "Goal Setting", desc: "Define investment horizon, budget, and return expectations." },
      { step: "02", title: "Market Scan", desc: "Identify top micro-markets based on infra and demand drivers." },
      { step: "03", title: "Property Shortlist", desc: "Curated options with ROI projections and risk assessment." },
      { step: "04", title: "Portfolio Review", desc: "Quarterly performance tracking and rebalancing advice." },
    ],
    extra: {
      markets: [
        { title: "Golf Course Extension", desc: "12–14% rental yield · Premium residential" },
        { title: "Noida Sector 150", desc: "15–18% appreciation · New infra corridor" },
        { title: "Dwarka Expressway", desc: "High growth · Metro connectivity 2026" },
        { title: "Cyber City Gurgaon", desc: "Commercial · Grade-A office spaces" },
      ],
    },
  },
  {
    id: 5,
    slug: "property-management",
    title: "Property Management",
    tagline: "Your Property, Our Responsibility",
    shortDescription:
      "Hassle-free tenant management, rent collection, and property maintenance.",
    description:
      "Own a property but don't have time to manage it? Our team handles tenant screening, rent collection, maintenance, and inspections — keeping your asset profitable without any effort from you.",
    icon: "ShieldCheck",
    heroImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    accent: "#6d28d9",
    accentLight: "#f5f3ff",
    features: [
      "Tenant screening & placement",
      "Monthly rent collection",
      "Maintenance & repair coordination",
      "Quarterly property inspections",
    ],
    highlights: [
      { title: "Verified Tenants", desc: "Background checks and employment verification." },
      { title: "Transparent Reporting", desc: "Monthly rent, expenses, and occupancy statements." },
      { title: "24/7 Support", desc: "Dedicated manager for emergency repairs." },
    ],
    stats: [
      { value: "98%", label: "Occupancy Rate" },
      { value: "100%", label: "Rent Collection" },
      { value: "200+", label: "Properties Managed" },
      { value: "24/7", label: "Support Available" },
    ],
    steps: [
      { step: "01", title: "Property Onboarding", desc: "Condition audit, photography, and market rent assessment." },
      { step: "02", title: "Tenant Placement", desc: "Verified tenant search, screening, and agreement signing." },
      { step: "03", title: "Ongoing Management", desc: "Rent collection, maintenance, and tenant communication." },
      { step: "04", title: "Monthly Reporting", desc: "Detailed statement with income, expenses, and occupancy." },
    ],
    extra: {
      managed: [
        "Rent collection & deposit handling",
        "Tenant move-in / move-out inspection",
        "Plumbing, electrical & AC repairs",
        "Society dues & utility bill payment",
        "Legal notice & eviction support",
        "Annual property tax filing assistance",
      ],
    },
  },
  {
    id: 6,
    slug: "interior-design",
    title: "Interior Design",
    tagline: "Spaces That Reflect You",
    shortDescription:
      "Transform your new home with modern, functional interiors tailored to your lifestyle.",
    description:
      "Move into a home that's truly yours. Our design partners create beautiful, functional spaces — from modular kitchens to complete home makeovers — with transparent pricing and on-time delivery.",
    icon: "Sofa",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    accent: "#be123c",
    accentLight: "#fff1f2",
    features: [
      "3D design visualization",
      "Modular kitchen & wardrobe",
      "Turnkey home interiors",
      "Furniture & decor sourcing",
    ],
    highlights: [
      { title: "Free Consultation", desc: "Initial design consultation and mood board at no cost." },
      { title: "Fixed Pricing", desc: "Detailed BOQ with no surprise costs mid-project." },
      { title: "Quality Materials", desc: "Premium brands with up to 10-year warranty." },
    ],
    stats: [
      { value: "500+", label: "Homes Designed" },
      { value: "45", label: "Days Avg. Delivery" },
      { value: "10yr", label: "Modular Warranty" },
      { value: "3D", label: "Free Visualization" },
    ],
    steps: [
      { step: "01", title: "Consultation", desc: "Understand your style, budget, and functional requirements." },
      { step: "02", title: "3D Design", desc: "Photorealistic renders of every room before work begins." },
      { step: "03", title: "Execution", desc: "Modular manufacturing and on-site installation by trained teams." },
      { step: "04", title: "Handover", desc: "Final walkthrough, snag fixing, and warranty documentation." },
    ],
    extra: {
      packages: [
        { title: "Modular Kitchen", desc: "From ₹1.2L · Premium finishes · 10-yr warranty" },
        { title: "Wardrobe & Storage", desc: "From ₹45K · Custom sizing · Soft-close fittings" },
        { title: "Living Room", desc: "From ₹80K · TV unit, seating, lighting design" },
        { title: "Full Home Interior", desc: "From ₹4.5L · Turnkey 2/3 BHK complete makeover" },
      ],
      styles: ["Modern Minimalist", "Contemporary Luxury", "Scandinavian", "Traditional Indian"],
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
