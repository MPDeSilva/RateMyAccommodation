module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  important: true,
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F96277",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C"
      },
      yellow: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FCCB76",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309"
      },
      orange: "#FA8C6D",
      green: {
        50: "#ECFDF5",
        100: "#D1FAE5",
        200: "#4ED4AF",
        300: "#6EE7B7",
        400: "#34D399",
        500: "#10B981",
        600: "#059669",
        700: "#047857"
      },
      blue: "#3C6A8B",
      indigo: { 100: "#5B6098", 500: "#4e5383" },
      violet: "#8760A8",
      white: "#FFFFFF",
      grey1: "#FBFAFB",
      grey2: "rgb(248, 249, 250)",
      grey3: "#D1D1D6",
      grey4: "#C7C7CC",
      grey5: "#292721",
      black: "#000000",
      gray: {
        50: "rgba(249, 250, 251, 1)",
        100: "rgba(243, 244, 246, 1)",
        200: "rgba(229, 231, 235, 1)",
        300: "rgba(209, 213, 219, 1)",
        400: "rgba(156, 163, 175, 1)",
        500: "#6B7280",
        600: "rgba(75, 85, 99, 1)",
        700: "#374151",
        800: "#1F2937",
        900: "#111827"
      }
    },
    screens: {
      xs: "350px",
      sm: "641px",
      md: "801px",
      md2: "901px",
      lg: "1025px",
      xl: "1281px",
      "2xl": "1536px"
    },
    maxWidth: {
      "1/4": "25%",
      30: "32%",
      "1/2": "50%",
      "3/4": "75%",
      "7xl": "1300px",
      "5xl": "1100px",
      xxl: "800px",
      xl: "680px",
      l: "580px",
      icon: "100px",
      mob: "400px",
      cta: "200px",
      tableRow: "150px"
    },
    minWidth: {
      icon: "100px",
      tableRow: "150px"
    },

    boxShadow: {
      none: "0px 25px 50px -12px rgba(0,0,0,0)",
      custom: "0px 25px 50px -12px rgba(0,0,0,0.08)",
      medium: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      xxl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    },

    backgroundImage: {
      uniSearch : "url('/SearchMain.jpeg')",
      uniLogin : "url('/LoginMain.jpeg')",
      footer: "url('/FooterGraphic.svg')",
      smallBlueRectangle: "url('/SmallRectangleBabyBlue.svg')",
      largeBlueRectangle: "url('/LargeRectangleBabyBlue.svg')",
      greenRectangle: "url('/RectangleBabyGreen.svg')",
      LargeGreyRectangle: "url('/LargeRectangleGrey.svg')",
      LargeGreyRectangle: "url('/LargeRectangleGrey.svg')",
      ExtraLargeGrey: "url('/ExtraLargeGrey.svg')",
      SquareGrey: "url('/LargeSquareGrey.svg')"
    },

    leading: {
      4.9: "line-height: 1.2rem",
      11: "line-height: 2.625rem",
      12: "line-height: 3.75rem"
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
  "postcss-import",
  "tailwindcss",
  "autoprefixer"
]
};
