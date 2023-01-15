module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        my_theme: {
          primary: "#FEBD17",
          secondary: "#6D28D9",
          accent: "#0F172A",
          info: "#6D28D9",
          neutral: "#e0e0e8",
          warning: "#0F172A",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f0f0f0",
        },
      },
      {
        my_dark: {
          primary: "#FEBD17",
          secondary: "#0284C7",
          accent: "#0284C7",
          info: "#0284C7",
          neutral: "#282e3f",
          warning: "#E2E8F0",
          "base-100": "#0f1729",
          "base-200": "#162032",
          "base-300": "#1E293B",
        },
      },
      "light",
      "dracula",
    ],
  },
  
}
