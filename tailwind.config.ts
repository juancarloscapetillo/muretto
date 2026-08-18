import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        muretto: {
          navy: "#00283E",
          navyDark: "#012233",
          navyLight: "#0F3A54",
          cream: "#EAE3DE",
          creamBlush: "#EDDED7",
          camel: "#B18C6E",
          camelDark: "#96714F",
          slate: "#8D99A5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)",
        popover: "0 10px 40px -10px rgb(0 0 0 / 0.25)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
