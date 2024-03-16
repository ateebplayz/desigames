import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'min': '1279px'},
        'lg': {'max': '1023px'},
        'lgo': {'min': '1023px'},
        'md': {'max': '767px'},
        'mdo': {'min': '767px'},
        'sm': {'max': '639px'},
      }
    },
  },
  plugins: [],
};
export default config;
