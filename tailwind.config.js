module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        right: "10px 0px 6px -4px rgba(0,0,0,0.53)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
