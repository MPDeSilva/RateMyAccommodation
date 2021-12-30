module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  important: true,
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      black: "#000000",
      red: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F96277",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C",
        800: '#9b2c2c',
        900: '#742a2a',
      },
      yellow: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FCCB76",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309",
        800: '#975a16',
        900: '#744210',
      },
      orange: {
      100: '#fffaf0',
      200: '#feebc8',
      300: '#fbd38d',
      400: '#f6ad55',
      500: '#ed8936',
      600: '#dd6b20',
      700: '#c05621',
      800: '#9c4221',
      900: '#7b341e'
      },
      green: {
        50: "#ECFDF5",
        100: "#D1FAE5",
        200: "#4ED4AF",
        300: "#6EE7B7",
        400: "#34D399",
        500: "#10B981",
        600: "#059669",
        700: "#047857",
        800: '#276749',
        900: '#22543d'
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },
      purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },  
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
      },
      violet: "#8760A8",
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
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
  }
};
