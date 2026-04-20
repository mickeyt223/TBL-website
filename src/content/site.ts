// ============================================================================
// SITE CONTENT — edit this file to update the site.
// Every component on the site reads from this single object.
// Change text, swap image paths, add testimonials, etc. — then commit + push.
// Render will auto-deploy in ~60 seconds.
// ============================================================================

export const siteContent = {
  business: {
    name: "[BUSINESS NAME]",
    tagline: "[TAGLINE — e.g., Light up your nights]",
    phone: "[XXX-XXX-XXXX]",
    email: "[hello@yourbusiness.com]",
    address: "", // optional — leave empty string to hide
    serviceArea: "[e.g., North Georgia — Atlanta metro, North Fulton, Forsyth, Dawson]",
    socials: {
      instagram: "[@handle]",        // e.g. "https://instagram.com/yourhandle"
      facebook: "[URL]",              // e.g. "https://facebook.com/yourpage"
      google: "[URL]",                // Google Business profile URL
    },
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "OUTDOOR LIGHTING",
    headline: "Light up your nights.",
    subhead:
      "Make your best days last longer with an artfully illuminated outdoor space.",
    ctaText: "Request a Consultation",
    ctaHref: "#contact",
    backgroundImage: "/images/hero.jpg",
  },

  brandIntro: {
    eyebrow: "WELCOME",
    headline: "Just add light.",
    body:
      "We design and install outdoor lighting that makes your home feel like somewhere worth lingering. From path to pool to pergola — and beyond.",
  },

  gallery: [
    { src: "/images/gallery-1.jpg", alt: "Illuminated backyard pool at dusk" },
    { src: "/images/gallery-2.jpg", alt: "Lit pathway through a garden at night" },
    { src: "/images/gallery-3.jpg", alt: "Pergola with warm ambient lighting" },
    { src: "/images/gallery-4.jpg", alt: "Modern home exterior at night" },
    { src: "/images/gallery-5.jpg", alt: "Outdoor dining area under string lights" },
    { src: "/images/gallery-6.jpg", alt: "Accent-lit landscape and architecture" },
    { src: "/images/gallery-7.jpg", alt: "Stone patio with soft ground-level lighting" },
    { src: "/images/gallery-8.jpg", alt: "Tree uplighting across a front yard" },
  ],

  benefits: {
    eyebrow: "WHY OUTDOOR LIGHTING",
    sectionHeadline: "The difference is night and day.",
    items: [
      {
        eyebrow: "ENJOY YOUR EVENINGS",
        headline: "Spend more evenings outside.",
        body:
          "From happy hour to golden hour — to the witching hour. A well-lit yard invites you to stay out long after the sun goes down.",
        beforeImage: "/images/benefit-1-before.jpg",
        afterImage: "/images/benefit-1-after.jpg",
      },
      {
        eyebrow: "SHOW OFF YOUR HOME",
        headline: "Showcase your home's best features.",
        body:
          "Architecture, trees, water — every property has a story. Lighting tells it after dark.",
        beforeImage: "/images/benefit-2-before.jpg",
        afterImage: "/images/benefit-2-after.jpg",
      },
      {
        eyebrow: "SAFETY & SECURITY",
        headline: "Protect your investment.",
        body:
          "A softly lit property is a safer one — for you, for guests, and for every step in between.",
        beforeImage: "/images/benefit-3-before.jpg",
        afterImage: "/images/benefit-3-after.jpg",
      },
    ],
  },

  testimonials: [
    {
      quote:
        "They transformed our backyard into somewhere we actually want to spend time after dark. The difference was immediate.",
      author: "Chris",
    },
    {
      quote:
        "Professional from the first site visit through the final walkthrough. Our home has never looked better.",
      author: "Jennifer",
    },
    {
      quote:
        "Every detail was thoughtful — the fixtures, the placements, the intensity. It feels designed, not installed.",
      author: "Marcus",
    },
    {
      quote:
        "Neighbors keep asking who did the lighting. Worth every penny and then some.",
      author: "Elise",
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
        "Friendly, professional crews get the job done quickly — and done right. No lawns torn up, no corners cut.",
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

  philosophy: {
    eyebrow: "OUR APPROACH",
    headline: "Light is our business — and our art.",
    body: [
      "We believe outdoor lighting should feel inevitable — as if it were always meant to be there. No glare. No hot spots. No clutter of fixtures.",
      "Every project begins on your property, after dark, with our eyes and your feedback. Then we design. Then we install. Then we stay — to tune, adjust, and maintain year after year.",
    ],
    images: ["/images/philosophy-1.jpg", "/images/philosophy-2.jpg"],
    ctaText: "Meet us",
    ctaHref: "#contact",
  },

  finalCTA: {
    headline: "Light the way.",
    subhead: "From path to pool to pergola — and beyond.",
    ctaText: "Request a Consultation",
    ctaHref: "#contact",
    backgroundImage: "/images/final-cta.jpg",
  },

  contact: {
    eyebrow: "REQUEST A CONSULTATION",
    headline: "Tell us about your project.",
    subhead: "We'll be in touch within one business day.",
    // TODO: swap this for a real endpoint later.
    // For Formspree: replace the entire `formEndpoint` below with your Formspree URL
    // (e.g., "https://formspree.io/f/XXXXXXXX") and change the form method to POST.
    // The current mailto: opens the user's email client with the form data.
    formEndpoint: "mailto:[EMAIL]",
    projectTypes: [
      "Landscape Lighting",
      "Permanent Holiday Lighting",
      "Both",
      "Other",
    ],
  },

  footer: {
    tagline: "[TAGLINE — e.g., Light up your nights]",
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
