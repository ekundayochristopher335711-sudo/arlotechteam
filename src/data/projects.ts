export type Project = {
  title: string;
  href: string;
  category: string;
  color: string;
  screenshot?: string;
  highlight: string;
  about: string;
  built: string[];
  homepage?: boolean;
};

export const projects: Project[] = [
  {
    title: "Arlotech Clothing",
    href: "https://arlotechclothing.vercel.app/",
    category: "E-Commerce",
    color: "from-zinc-600/40 to-neutral-900/50",
    highlight: "A modern e-commerce store for a fashion brand.",
    about:
      "Arlotech Clothing is an online fashion store built for smooth browsing and easy checkout. The site showcases products with clean visuals, organised categories, and a mobile-first shopping experience that makes it easy for customers to find what they want and buy it fast.",
    built: [
      "Product catalogue with categories and filtering",
      "Clean product detail pages with image galleries",
      "Shopping cart and checkout flow",
      "Mobile-first responsive design",
      "Fast loading and smooth page transitions",
    ],
    homepage: false,
  },
  {
    title: "Breadwrapz",
    href: "https://breadwrapz2.netlify.app",
    category: "Food & Lifestyle Brand",
    color: "from-orange-500/50 to-amber-700/40",
    screenshot: "/previews/breadwrapz.svg",
    highlight: "Fresh Nigerian meals delivered fast.",
    about:
      "Breadwrapz is a Nigerian food delivery brand — wraps, rice meals, and combos with instant checkout, fast delivery, and easy tracking. The site is built to make ordering feel as good as the food itself, with a bold, appetising design and a smooth mobile experience.",
    built: [
      "Bold food-first homepage with real meal photography",
      "Menu section with categories, combos and descriptions",
      "Search bar and cart system for easy ordering",
      "Location and delivery tracking section",
      "Fast, mobile-optimised checkout experience",
    ],
  },
  {
    title: "Christopher Law Firm",
    href: "https://christophersdemo.netlify.app",
    category: "Professional Services",
    color: "from-slate-500/30 to-blue-900/20",
    highlight: "A professional website for a law firm.",
    about:
      "This law firm website was built to establish credibility and make it easy for potential clients to get in touch. The design is clean and authoritative — exactly what you want when someone is deciding whether to trust you with a legal matter.",
    built: [
      "Professional, trust-building design with a dark colour scheme",
      "Practice area pages clearly explaining services offered",
      "Contact form and consultation booking section",
      "Fully responsive and fast-loading",
    ],
  },
  {
    title: "Living Faith Church",
    href: "https://livingfaithchurchiworoko.netlify.app",
    category: "Community & Faith",
    color: "from-purple-500/30 to-indigo-800/20",
    highlight: "A church website for community and outreach.",
    about:
      "Built for Living Faith Church Iworoko, this site serves as a hub for the congregation — sharing service times, events, and sermons. The design is welcoming and easy to navigate for members of all ages.",
    built: [
      "Service times, events, and announcements section",
      "Sermon and media section for online content",
      "Prayer request and contact forms",
      "Warm, community-focused design",
    ],
  },
  {
    title: "Item Seven Restaurant",
    href: "https://itemseven.netlify.app",
    category: "Hospitality",
    color: "from-red-500/30 to-rose-900/20",
    highlight: "A restaurant site built around food discovery.",
    about:
      "Item Seven is a restaurant homepage designed to draw people in and make them hungry. The focus was on showcasing the menu beautifully and making it effortless for customers to find the restaurant and get in touch.",
    built: [
      "Appetising homepage with hero imagery and menu highlights",
      "Menu section with categories and descriptions",
      "Location, hours, and reservation contact section",
      "Smooth mobile experience for on-the-go visitors",
    ],
  },
];
