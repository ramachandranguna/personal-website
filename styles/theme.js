const breakpoints = ["30em", "45em", "64em", "80em", "90em", "100em"];

const [sm, md, xm, lg, ml, xl] = breakpoints;
breakpoints.sm = sm;
breakpoints.md = md;
breakpoints.xm = xm;
breakpoints.lg = lg;
breakpoints.ml = ml;
breakpoints.xl = xl;

const space = [
  0,
  0.2,
  0.4,
  0.6,
  0.8,
  1,
  1.2,
  1.4,
  1.6,
  1.8,
  2,
  2.5,
  3,
  3.5,
  4,
  5,
  6,
  8,
  10,
  12,
  16,
  20,
].map((s) => `${s}rem`);

const colors = {
  background: "#ffffff",
  primary: "#0b0b0d",
  secondary: "#474a56",
  ternary: "#214151",
  highlight: "#295939",
  modes: {
    dark: {
      background: "#22252c",
      primary: "#f4f3f3",
      secondary: "#bfd8d5",
      ternary: "#706c61",
      highlight: "#16c79a",
    },
  },
};

export const fontSets = [
  {
    name: "heading1",
    alias: "h1",
    fontSize: "32px",
    lineHeight: "36px",
    fontWeight: "semibold",
  },
  {
    name: "heading2",
    alias: "h2",
    fontSize: "28px",
    lineHeight: "30px",
    fontWeight: "semibold",
  },
  {
    name: "heading3",
    alias: "h3",
    fontSize: "24px",
    lineHeight: "26px",
    fontWeight: "semibold",
  },
  {
    name: "heading4",
    alias: "h4",
    fontSize: "20px",
    lineHeight: "22px",
    fontWeight: "medium",
  },
  {
    name: "heading5",
    alias: "h5",
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: "regular",
  },
  {
    name: "heading6",
    alias: "h6",
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: "regular",
  },
  {
    name: "p1",
    alias: "p1",
    fontSize: "17px",
    lineHeight: "19px",
    fontWeight: "regular",
  },
  {
    name: "p2",
    alias: "p2",
    fontSize: "15px",
    lineHeight: "17px",
    fontWeight: "regular",
  },
  {
    name: "p3",
    alias: "p3",
    fontSize: "13px",
    lineHeight: "15px",
    fontWeight: "regular",
  },
  {
    name: "p4",
    alias: "p4",
    fontSize: "11px",
    lineHeight: "13px",
    fontWeight: "regular",
  },
];
const fontMaps = fontSets.reduce(
  (
    fontMap,
    { name, alias = name, fontSize, lineHeight, fontWeight },
    index
  ) => {
    const fm = fontMap;
    fm.fontSizes[index] = fontSize;
    fm.fontSizes[name] = fontSize;
    fm.fontSizes[alias] = fontSize;
    fm.fontWeights[index] = fontWeight;
    fm.fontWeights[name] = fontWeight;
    fm.fontWeights[alias] = fontWeight;
    fm.lineHeights[name] = lineHeight;
    fm.lineHeights[alias] = lineHeight;
    return fm;
  },
  {
    fontFamily: {
      primary: "Roboto-Regular",
      bold: "Roboto-Bold",
      light: "Roboto-Light",
      extraLight: "Roboto-ExtraLight",
      medium: "Roboto-Medium",
      semibold: "Roboto-SemiBold",
      black: "Roboto-Black",
    },
    fontSizes: {},
    fontWeights: {
      medium: 500,
      semibold: 600,
      regular: 400,
      light: 100,
      bold: 700,
      block: 900,
    },
    lineHeights: {},
  }
);

export default {
  colors,
  space,
  breakpoints,
  ...fontMaps,
};
