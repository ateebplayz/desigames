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
        pastelBlue: '#A2D2FF', // Pastel Red
        pastelBlueLight: '#BDE0FE', // Pastel Green
        pastelPurple: "#CDB4DB", // Pastel lime
        pastelPinkDark: "#FFAFCC", // Pastel Yellow
        pastelPink: "#FFC8DD" // Pastel Pink 
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
