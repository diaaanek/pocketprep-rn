const colors = {
  accent: "#F3534A",
  primary: "#0094de",
  secondary: "#17b2ff",
  tertiary: "#FFE358",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#9DA3B4",
  gray2: "#C5CCD6"
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12
};

const fonts = {
  h1: {
    fontFamily: "Circular-Bold",
    fontSize: sizes.h1
  },
  h2: {
    fontFamily: "Circular-Bold",
    fontSize: sizes.h2
  },
  h3: {
    fontFamily: "Circular-Medium",
    fontSize: sizes.h3
  },
  header: {
    fontFamily: "Circular-Medium",
    fontSize: sizes.header
  },
  title: {
    fontFamily: "Circular-Medium",
    fontSize: sizes.title
  },
  body: {
    fontFamily: "Circular-Reg",
    fontSize: sizes.body
  },
  caption: {
    fontFamily: "Circular-Reg",
    fontSize: sizes.caption
  }
};

export { colors, sizes, fonts };
