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
        space: {
          900: '#0a0a1a',
          700: '#1a1a3a',
        },
        neon: {
          yellow: '#ffeb3b',
          purple: '#9c27b0',
          cyan: '#00bcd4'
        }
      },
      boxShadow: {
        'neubrutal': '8px 8px 0 0 #ffeb3b, -8px -8px 0 0 #00bcd4',
        'glow': '0 0 15px rgba(156, 39, 176, 0.3)'
      }
    },
  },
  plugins: [],
} satisfies Config;
