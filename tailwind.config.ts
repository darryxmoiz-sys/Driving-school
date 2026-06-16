import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#003366",
        "navy-dark": "#002244",
        "navy-light": "#004488",
        red: { DEFAULT: "#E63946", dark: "#C02030" },
        yellow: "#FFD700",
        "bg-light": "#F8F9FF",
        success: "#2ECC71",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      animation: {
        "road-dash": "roadDash 2s linear infinite",
        "counter-up": "counterUp 0.5s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        roadDash: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-40" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,51,102,0.08)",
        "card-hover": "0 12px 40px rgba(0,51,102,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
