import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 15s .5s linear infinite',
      },
      keyframes: {
        scroll: {
          "0%": { transform: 'translateX(0%)' } ,
          "50%": { transform: 'translateX(-300%)' } ,
          "100%": { transform: 'translateX(0%)' } ,
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        ramillas: ["Ramillas", "serif"]
      },
      spacing: {
        '1/6': '16.666667%',
      },
    },
  },
  plugins: [],
} satisfies Config;
