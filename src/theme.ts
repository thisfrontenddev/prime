import { createTheme } from "@shopify/restyle";
const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#181818",
  white: "#FFFFFF",
  grey500: "#d8d8d8",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainText: palette.black,
    accent: palette.black,
    blackBackground: palette.black,
    cardPrimaryBackground: palette.purplePrimary,
    white: palette.white,
  },
  textVariants: {
    hero: {
      fontSize: 48,
      fontWeight: "700",
      color: "white",
    },
    h1: {
      fontSize: 26,
      fontWeight: "700",
    },
    h2: {
      fontSize: 24,
      fontWeight: "700",
    },
    h3: {
      fontSize: 20,
      fontWeight: "700",
    },
    p1: {
      fontSize: 16,
      lineHeight: 24,
    },
    p2: {
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 24,
    },
    p3: {
      fontWeight: "800",
      fontSize: 16,
      lineHeight: 24,
    },
    s1: {
      fontSize: 14,
    },
    s2: {
      fontSize: 12,
      fontWeight: "500",
    },
    s3: {
      fontSize: 10,
    },
    buttonLabel: {
      fontSize: 16,
      lineHeight: 22,
    },
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
    xxl: 64,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;
