import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        canvas: "#ffffff",
        "soft-cloud": "#f5f5f5",
        hairline: "#cacacb",
        "hairline-soft": "#e5e5e5",
        charcoal: "#39393b",
        ash: "#4b4b4d",
        mute: "#707072",
        stone: "#9e9ea0",
        sale: "#d30005",
        "sale-deep": "#780700",
        success: "#007d48",
        "success-bright": "#1eaa52",
        info: "#1151ff",
        "info-deep": "#0034e3",
        "accent-pink": "#ed1aa0",
        "accent-pink-soft": "#ffb0dd",
        "accent-purple-soft": "#beaffd",
        "accent-purple-pale": "#d6d1ff",
        "accent-teal": "#0a7281",
        "accent-warm": "#c8956c",
        "accent-warm-soft": "#f0dcc8",
        "accent-gold": "#b8860b",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "'Helvetica Now Display'", "Helvetica", "Arial", "sans-serif"],
        heading: ["'Inter'", "'Helvetica Now Display Medium'", "Helvetica", "Arial", "sans-serif"],
        body: ["'Inter'", "'Helvetica Now Text'", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-campaign": ["96px", { lineHeight: "0.9", letterSpacing: "-0.02em", fontWeight: "500" }],
        "heading-xl": ["32px", { lineHeight: "1.2", fontWeight: "500" }],
        "heading-lg": ["24px", { lineHeight: "1.2", fontWeight: "500" }],
        "heading-md": ["18px", { lineHeight: "1.4", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-strong": ["16px", { lineHeight: "1.5", fontWeight: "500" }],
        "button-lg": ["24px", { lineHeight: "1.2", fontWeight: "500" }],
        "button-md": ["16px", { lineHeight: "1.5", fontWeight: "500" }],
        "button-sm": ["14px", { lineHeight: "1.5", fontWeight: "500" }],
        "link-md": ["16px", { lineHeight: "1.75", fontWeight: "500" }],
        "caption-md": ["14px", { lineHeight: "1.5", fontWeight: "500" }],
        "caption-sm": ["12px", { lineHeight: "1.5", fontWeight: "500" }],
        "utility-xs": ["9px", { lineHeight: "1.75", fontWeight: "500" }],
      },
      spacing: {
        xxs: "2px",
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "24px",
        xxl: "30px",
        section: "48px",
      },
      borderRadius: {
        none: "0px",
        sm: "18px",
        md: "24px",
        lg: "30px",
        full: "9999px",
      },
      maxWidth: {
        content: "1440px",
      },
      boxShadow: {
        "inset-bottom": "inset 0 -1px 0 0 #e5e5e5",
        "card-hover": "0 20px 40px -12px rgba(0,0,0,0.1)",
        "card-premium": "0 8px 32px -4px rgba(0,0,0,0.08)",
        glass: "0 8px 32px rgba(0,0,0,0.06)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
