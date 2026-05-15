// ============================================================================
// SITE CONTENT:edit this file to update the site.
// Every component on the site reads from this single object.
// Change text, swap image paths, add testimonials, etc.:then commit + push.
// Render will auto-deploy in ~60 seconds.
// ============================================================================

export const siteContent = {
  seo: {
    // Update this once you have a custom domain (Render will give you an .onrender.com URL too).
    siteUrl: "https://thomasbrotherslighting.com",
    // Better title for browser tab + search results:keyword-rich, geo-targeted.
    title:
      "Outdoor & Holiday Lighting in Metro Atlanta | Thomas Brothers Lighting",
    description:
      "Thomas Brothers Lighting designs, installs, and maintains outdoor landscape lighting and permanent holiday lighting across Metro Atlanta and surrounding areas.",
    keywords: [
      "outdoor lighting Atlanta",
      "landscape lighting Atlanta",
      "holiday lighting Atlanta",
      "permanent holiday lighting",
      "Christmas lights installation",
      "Metro Atlanta lighting contractor",
    ],
    // Approximate center of service area:used in geo meta tags + LocalBusiness schema.
    geo: {
      latitude: 33.749,
      longitude: -84.388,
      region: "US-GA",
      placename: "Atlanta, Georgia",
    },
    // Cities you actively serve:feeds the LocalBusiness areaServed structured data.
    areaServed: [
      "Atlanta",
      "Alpharetta",
      "Roswell",
      "Marietta",
      "Canton",
      "Cumming",
      "Milton",
      "Sandy Springs",
      "Dunwoody",
      "Johns Creek",
      "Woodstock",
    ],
    priceRange: "$$",
  },

  business: {
    name: "Thomas Brothers Lighting",
    logo: "/images/logo.png",         // shown in header; bold wide TBL wordmark
    logoFooter: "/images/logo-footer.png", // shown in footer; full lockup with lightning + text
    logoAlt: "Thomas Brothers Lighting",
    tagline: "Subtle by design. Powerful by effect.",
    phone: "(404) 915-2016",
    email: "mickey@thomasbrotherslighting.com",
    address: "", // optional:leave empty string to hide
    serviceArea: "Lighting homes in Metro Atlanta and the surrounding areas",
    socials: {
      instagram: "https://instagram.com/thomasbrotherslighting",
      facebook: "https://www.facebook.com/profile.php?id=61560782110405",
      google: "",                     // Google Business profile URL:fill in when live
    },
  },

  nav: [
    {
      label: "Services",
      href: "#services",
      children: [
        { label: "Outdoor Lighting", href: "#services" },
        { label: "Holiday Lighting", href: "#holiday" },
      ],
    },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "OUTDOOR LIGHTING",
    headline: "Better nights start here.",
    subhead:
      "Thoughtfully designed lighting that brings your outdoor space to life.",
    ctaText: "Request a Free Estimate",
    ctaHref: "#contact",
    backgroundImage: "/images/hero.jpg",
  },

  brandIntro: {
    title: "Thomas Brothers Lighting",
    subtitle: "Design, Installation & Maintenance",
    description: "Lighting homes in Metro Atlanta and the surrounding areas.",
    paragraphs: [
      "Outdoor lighting should look expensive, not be expensive.",
      "Done right, it brings out the best in your home with a clean, balanced design that feels natural and dialed in.",
      "At Thomas Brothers Lighting, we deliver high-end results using quality fixtures and smart design so you get maximum impact without unnecessary cost.",
    ],
  },

  gallery: [
    { src: "/images/gallery-1.jpg", alt: "Brick and stone home with warm uplighting at night" },
    { src: "/images/gallery-2.jpg", alt: "Lit pathway through a garden at night" },
    { src: "/images/gallery-3.jpg", alt: "Pergola with warm ambient lighting" },
    { src: "/images/gallery-4.jpg", alt: "Modern home exterior at night" },
    { src: "/images/gallery-5.jpg", alt: "Outdoor dining area under string lights" },
    { src: "/images/gallery-6.jpg", alt: "Accent-lit landscape and architecture" },
    { src: "/images/gallery-7.jpg", alt: "Stone patio with soft ground-level lighting" },
    { src: "/images/gallery-8.jpg", alt: "Tree uplighting across a front yard" },
    { src: "/images/gallery-9.jpg", alt: "Lakeside dock with blue LED lighting at night" },
    { src: "/images/gallery-10.jpg", alt: "Pool and spa with blue lighting and landscape uplights" },
    { src: "/images/gallery-11.jpg", alt: "White farmhouse exterior with soffit and accent lighting" },
    { src: "/images/gallery-12.jpg", alt: "Deck staircase with recessed step lights" },
    { src: "/images/gallery-13.jpg", alt: "Tree uplighting around fire pit area" },
    { src: "/images/gallery-14.jpg", alt: "Holiday string lights draped from large tree" },
  ],

  benefits: {
    eyebrow: "WHY OUTDOOR LIGHTING",
    sectionHeadline: "The difference is night and day.",
    items: [
      {
        eyebrow: "ENJOY YOUR EVENINGS",
        headline: "Spend more evenings outside.",
        body:
          "From happy hour to golden hour, all the way to the witching hour. A well-lit yard invites you to stay out long after the sun goes down.",
        image: "/images/benefit-1.jpg",
      },
      {
        eyebrow: "SHOW OFF YOUR HOME",
        headline: "Showcase your home's best features.",
        body:
          "Architecture, trees, water. Every property has a story, and lighting tells it after dark.",
        image: "/images/benefit-2.jpg",
      },
      {
        eyebrow: "SAFETY & SECURITY",
        headline: "Protect your investment.",
        body:
          "A softly lit property is a safer one. For you, for guests, and for every step in between.",
        image: "/images/benefit-3.jpg",
      },
    ],
  },

  testimonials: [
    {
      quote:
        "Mickey walked our property at dusk and pointed out things we'd never noticed. The architecture, the magnolias out back, the way the chimney catches light. By the time he left we were sold. The finished result is somehow even better than the sketch he showed us.",
      author: "Jennifer, Roswell",
    },
    {
      quote:
        "Bailey's crew was on the property for three days and you honestly couldn't tell. No torn-up lawn, no exposed wires, no mess. Whatever they did with the trenching is some kind of wizardry.",
      author: "Chris, Marietta",
    },
    {
      quote:
        "Felipe and his team were on time every morning, polite to the kids, and clearly proud of their work. Before they left, Felipe walked me through every single fixture so I knew exactly what I was looking at.",
      author: "Marcus, Sandy Springs",
    },
    {
      quote:
        "We've worked with bigger landscape companies and they didn't care nearly as much. With Bailey and Mickey you can tell it's actually their business. They answer the phone themselves, show up when they say they will, and the work shows it. Three neighbors have already asked us for their number.",
      author: "Elise, Alpharetta",
    },
  ],

  services: [
    {
      eyebrow: "OUTDOOR LIGHTING DESIGN",
      title: "Design",
      blurb:
        "Experience new ways to unwind in your outdoor spaces, day and night. Custom plans tailored to your home.",
      image: "/images/service-design.jpg",
      href: "#contact",
    },
    {
      eyebrow: "GOLD STANDARD INSTALLATION",
      title: "Installation",
      blurb:
        "Friendly, professional crews get the job done quickly, and done right. No lawns torn up, no corners cut.",
      image: "/images/service-install.jpg",
      href: "#contact",
    },
    {
      eyebrow: "OUTDOOR LIGHTING SERVICE",
      title: "Maintenance",
      blurb:
        "Annual maintenance keeps your system in peak condition year-round. Set it, enjoy it, forget it.",
      image: "/images/service-maintenance.jpg",
      href: "#contact",
    },
  ],

  holidayLighting: {
    eyebrow: "HOLIDAY LIGHTING",
    headline: "Holiday lighting, done with the same care.",
    body:
      "From classic warm whites to fully programmable color shows, we install holiday lighting that matches your home's character and the season.",
    options: [
      {
        label: "PERMANENT",
        title: "Year-round, every season.",
        body:
          "Discreet color-changing lights installed once, controlled from your phone. Holidays in December, game nights in October, birthdays in July. One system, every occasion.",
      },
      {
        label: "SEASONAL",
        title: "Installed and taken down for you.",
        body:
          "Full install in November, professional removal in January. No ladders, no tangled lights, no hassles.",
      },
    ],
    ctaText: "Request a Free Estimate",
    ctaHref: "#contact",
    // 4-image crossfade background. Swap any of these files in public/images/ to update.
    backgroundImages: [
      "/images/holiday-1.jpg",
      "/images/holiday-2.jpg",
      "/images/holiday-3.jpg",
      "/images/holiday-4.jpg",
    ],
  },

  philosophy: {
    eyebrow: "OUR APPROACH",
    headline: "Light is our business, and our art.",
    body: [
      "We believe outdoor lighting should feel inevitable, as if it were always meant to be there. No glare. No hot spots. No clutter of fixtures.",
      "Every project begins on your property, after dark, with our eyes and your feedback. Then we design. Then we install. Then we stay, to tune, adjust, and maintain year after year.",
    ],
    images: ["/images/philosophy-1.jpg", "/images/philosophy-2.jpg"],
    ctaText: "Meet us",
    ctaHref: "#contact",
  },

  finalCTA: {
    headline: "Light the way.",
    subhead: "From path to pool to pergola, and beyond.",
    ctaText: "Request a Free Estimate",
    ctaHref: "#contact",
    backgroundImage: "/images/final-cta.jpg",
  },

  contact: {
    eyebrow: "REQUEST A CONSULTATION",
    headline: "Tell us about your project.",
    subhead: "We'll be in touch within one business day.",
    // Formspree endpoint:submissions go to mickey@thomasbrotherslighting.com.
    // Change/disable in your Formspree dashboard at https://formspree.io
    formEndpoint: "https://formspree.io/f/mlgawlvo",
    projectTypes: [
      "Landscape Lighting",
      "Holiday Lighting",
      "Both",
      "Other",
    ],
  },

  footer: {
    tagline: "Subtle by design. Powerful by effect.",
    quickLinks: [
      { label: "Services", href: "#services" },
      { label: "Gallery", href: "#gallery" },
      { label: "About", href: "#philosophy" },
      { label: "Contact", href: "#contact" },
    ],
    copyrightSuffix: "All rights reserved.",
  },
} as const;

export type SiteContent = typeof siteContent;
