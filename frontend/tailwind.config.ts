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
        pastelRed: '#ee6055', // Pastel Red
        pastelGreen: '#60d394', // Pastel Green
        pastelLime: "#aaf683", // Pastel lime
        pastelYellow: "#ffd97d", // Pastel Yellow
        pastelPink: "#ff9b85" // Pastel Pink 
      },
      fontFamily: {
        primary: ['chilanka', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
