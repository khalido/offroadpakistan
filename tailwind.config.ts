import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Heritage colors from original site
        heritage: {
          teal: "#00473F", // Original content links
          green: "#98A100", // Original sidebar accents
          brown: "#CC9966", // Original visited links
          gray: "#565656", // Original navigation
          "light-gray": "#E4E4E4", // Original background
        },
        // Pakistan flag inspired
        pakistan: {
          green: "#01411C",
          white: "#FFFFFF",
        },
        // Adventure earth tones
        adventure: {
          sand: "#D2B48C",
          mountain: "#708090",
          sunset: "#FF6B35",
          cream: "#F5F5DC",
        },
      },
      fontFamily: {
        // Original site font stack
        heritage: ["Tahoma", "Verdana", "Arial", "Helvetica", "sans-serif"],
        // Modern fallback
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        // Original site width
        heritage: "810px",
      },
      width: {
        // Content width from original (488px)
        "heritage-content": "500px",
        // Sidebar width from original (240px)
        "heritage-sidebar": "240px",
      },
    },
  },
  plugins: [],
} satisfies Config;
