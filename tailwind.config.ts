import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        textLight: {
          500: "#1E160F",
          400: "#2A1D14",
          300: "#3F332A",
          200: "#54403C",
          100: "#694D4E",
          50: "#7E5A60",
        },
        textDark: {
          500: "#F5ECDB",
        },
        v8: {
          bg: "var(--v8-bg)",
          text: "var(--v8-text)",
          card: "var(--v8-card)",
          "card-soft": "var(--v8-card-soft)",
          subtle: "var(--v8-subtle)",
          muted: "var(--v8-muted)",
          faint: "var(--v8-faint)",
          hairline: "var(--v8-hairline)",
          "hairline-strong": "var(--v8-hairline-strong)",
          "on-accent": "var(--v8-on-accent)",
          accent: "var(--v8-accent)",
          "accent-light": "var(--v8-accent-light)",
          "accent-wash": "var(--v8-accent-wash)",
          green: "var(--v8-green)",
          "green-light": "var(--v8-green-light)",
          orange: "var(--v8-orange)",
          "orange-light": "var(--v8-orange-light)",
          "dark-card": "var(--v8-dark-card)",
          "darker-card": "#18181B",
          status: "var(--v8-status)",
          warm: "var(--v8-warm)",
        },
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.875rem",
        "3xl": "2.25rem",
        "4xl": "2.75rem",
        "5xl": "3.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
