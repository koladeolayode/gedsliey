import type { Config } from "tailwindcss";

/**
 * Tailwind v4 loads this file via the `@config` directive in app/globals.css.
 * Brand tokens are also declared in the CSS `@theme` block so utility classes
 * (e.g. bg-brand-brown, font-display) are generated. This file documents the
 * design system and provides the content globs.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-brown": "#4A382E",
        "brand-gray": "#6E6A67",
        "brand-plum": "#40364D",
        "brand-blue": "#315A7D",
        "off-white": "#F7F7F5",
        "near-black": "#171717",
      },
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
