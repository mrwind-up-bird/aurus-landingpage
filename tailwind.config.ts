import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        voice: {
          primary: "#6366f1",
          secondary: "#8b5cf6",
          bg: "#0f0f23",
          surface: "#1a1a2e",
          border: "#2d2d44",
        },
      },
      backgroundColor: {
        'voice-bg': '#0f0f23',
        'voice-surface': '#1a1a2e',
      },
      borderColor: {
        'voice-border': '#2d2d44',
        'voice-primary': '#6366f1',
      },
    },
  },
  plugins: [],
} satisfies Config;
