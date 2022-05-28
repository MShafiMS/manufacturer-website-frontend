module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",
          secondary: "#60a5fa",
          accent: "#b191f2",
          neutral: "#191924",
          "base-100": "#ffffff",
          success: "#9ca3af",
          warning: "#6b7280",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
