import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  // Use class-based dark mode so the UI toggle can override system preference
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        sans: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(110, 213, 166, 0.18)",
        panel: "0 30px 90px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(110, 213, 166, 0.16), transparent 28%), radial-gradient(circle at 80% 20%, rgba(236, 194, 95, 0.15), transparent 24%)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [typography],
};
