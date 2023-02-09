/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["JetBrains Mono", "monospace"],
    },
    extend: {
      colors: {
        "background-color": "#333333",
        "h1-color": "#99FFCC",
        "h2-color": "#15BCBC",
        "h3-color": "#2299CC",
        "h4-color": "#52528E",
        "text-color": "#C8C8C8",
        "link-color": "#ff7373",
      },
    },
  },
  plugins: [],
};
