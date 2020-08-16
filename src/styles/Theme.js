import React from "react";
import { ThemeProvider, css } from "styled-components";

const COLORS = {
  yellow: "#FAB516",
  blue: "#074F83",
};

const SEMANTIC_COLORS = {
  background: COLORS.blue,
  bodyType: "#000",
  headerType: "#fff",
  interactive: COLORS.yellow,
};
const FONTS = {
  default: `'Source Sans Pro', sans`,
};
const GRID = {
  mobile: {
    breakpoint: 375,
  },
  tablet: {
    breakpoint: 768,
  },
  desktop: {
    breakpoint: 1200,
  },
};
const GRID_HELPERS = {
  LayoutContainer: css`
    width: 100%;
    /* padding-left: ${GRID.pageMargin}px; */
    /* padding-right: ${GRID.pageMargin}px; */
    max-width: 1200px;
  `,
};
const DEVICE_WIDTHS = {
  queries: {
    mobile: `(min-width: ${GRID.mobile.breakpoint}px)`,
    mobileOnly: `(max-width: ${GRID.mobile.maxWidth}px)`,
    tablet: `(min-width: ${GRID.tablet.breakpoint}px)`,
    tabletOnly: `(min-width: ${GRID.tablet.breakpoint}px) and (max-width: ${GRID.tablet.maxWidth}px)`,
    desktop: `(min-width: ${GRID.desktop.breakpoint}px)`,
  },
  size: {
    mobile: `${GRID.mobile.breakpoint}px`,
    tablet: `${GRID.tablet.breakpoint}px`,
    desktop: `${GRID.desktop.breakpoint}px`,
  },
};

const TYPE = {
  body: css`
    font-family: ${FONTS.default};
    color: ${SEMANTIC_COLORS.bodyType};
    font-size: 1rem;
    font-weight: 600;
    @media ${DEVICE_WIDTHS.queries} {
      font-size: 1.2rem;
    }
  `,
  largeHeader: css`
    font-family: ${FONTS.default};
    color: ${SEMANTIC_COLORS.headerType};
    font-size: 1.5rem;
    font-weight: 900;
  `,
};

export const ThemeSettings = {
  colors: { ...COLORS, ...SEMANTIC_COLORS },
  device: { ...DEVICE_WIDTHS.queries },
  fonts: FONTS,
  grid: { ...GRID, ...GRID_HELPERS },
  type: TYPE,
};
export const Theme = ({ children }) => <ThemeProvider theme={ThemeSettings}>{children}</ThemeProvider>;
