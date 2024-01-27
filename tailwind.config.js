/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        pr0: {
          "0%": { width: "0%" },
          "100%": { width: "60%" },
        },
        pr1: {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
        pr2: {
          "0%": { width: "0%" },
          "100%": { width: "40%" },
        },
        pr3: {
          "0%": { width: "0%" },
          "100%": { width: "30%" },
        },
      },
      animation: {
        progress0: "pr0 2s ease-in-out",
        progress1: "pr1 2s ease-in-out",
        progress2: "pr2 2s ease-in-out",
        progress3: "pr3 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
