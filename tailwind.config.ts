import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        // omega
        "mgray": {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b"
        },
        // alpha
        "mlime": {
          base: "#CAFE00",
          100: "#ECFFA2",
          200: "#E4FF79",
          300: "#DBFF51",
          400: "#D3FF28",
          500: "#CAFE00",
          600: "#9DC600",
          700: "#718E00",
          800: "#445600",
          900: "#181E00"
        },
        // beta
        "mgreen": {
          base: "#22C55E",
          100: "#DCFCE7",
          200: "#BBF7D0",
          300: "#86EFAC",
          400: "#4ADE80",
          500: "#22C55E",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
          900: "#14532D"
        }
      }
    }
  },
  plugins: []
};
export default config;
