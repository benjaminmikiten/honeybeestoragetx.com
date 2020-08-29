import React from "react";
import { ThemeProvider, css } from "styled-components";
import { lighten, darken } from "polished";

const COLORS = {
  yellow: "#FAB516",
  blue: "#074F83",
};

const SEMANTIC_COLORS = {
  background: COLORS.blue,
  bodyType: "white",
  active: COLORS.yellow,
  activeHover: lighten(0.2, COLORS.yellow),
  headerType: "#fff",
  interactive: COLORS.yellow,
  footer: darken(0.05, COLORS.blue),
};
const FONTS = {
  default: `'Source Sans Pro', sans`,
};
const GRID = {
  mobile: {
    breakpoint: 375,
    margin: 18,
    gutter: 16,
    columns: 12,
    maxWidth: 768 - 1,
  },
  tablet: {
    breakpoint: 768,
    maxWidth: 1200 - 1,
    margin: 48,
    gutter: 16,
    columns: 12,
  },
  desktop: {
    maxWidth: 1200,
    breakpoint: 1200,
    margin: 64,
    gutter: 24,
    columns: 12,
  },
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

const GRID_HELPERS = {
  GridParent: css`
    display: flex;
    justify-content: space-between;
    width: calc(100% + ${GRID.mobile.gutter}px);
    margin-left: calc(${GRID.mobile.gutter} * -0.5px);
    margin-right: calc(${GRID.mobile.gutter} * -0.5px);
    @media ${DEVICE_WIDTHS.queries.tablet} {
      width: calc(100% + ${GRID.tablet.gutter}px);
      margin-left: calc(${GRID.tablet.gutter} * -0.5px);
      margin-right: calc(${GRID.tablet.gutter} * -0.5px);
    }
    @media ${DEVICE_WIDTHS.queries.desktop} {
      width: calc(100% + ${GRID.tablet.desktop}px);
      margin-right: calc(${GRID.desktop.gutter} * -0.5px);
      margin-left: calc(${GRID.desktop.gutter} * -0.5px);
    }
  `,
  GridChild: css`
    padding-left: calc(${GRID.mobile.gutter} * 0.5px);
    padding-right: calc(${GRID.mobile.gutter} * 0.5px);
    @media ${DEVICE_WIDTHS.queries.tablet} {
      padding-left: calc(${GRID.tablet.gutter} * 0.5px);
      padding-right: calc(${GRID.tablet.gutter} * 0.5px);
    }
    @media ${DEVICE_WIDTHS.queries.desktop} {
      padding-right: calc(${GRID.desktop.gutter} * 0.5px);
      padding-left: calc(${GRID.desktop.gutter} * 0.5px);
    }
  `,
  LayoutContainer: css`
    width: 100%;
    margin: 0 auto;
    padding-left: calc(${GRID.mobile.margin}* 1px);
    padding-right: calc(${GRID.mobile.margin}* 1px);
    @media ${DEVICE_WIDTHS.queries.tablet} {
      padding-left: calc(${GRID.tablet.margin}* 1px);
      padding-right: calc(${GRID.tablet.margin}* 1px);
    }
    @media ${DEVICE_WIDTHS.queries.desktop} {
      padding-right: calc(${GRID.desktop.margin}* 1px);
      padding-left: calc(${GRID.desktop.margin}* 1px);
    }
    max-width: 1200px;
  `,
};

const TYPE = {
  body: css`
    font-family: ${FONTS.default};
    color: ${SEMANTIC_COLORS.bodyType};
    font-size: 1rem;
    font-weight: 600;
    font-style: normal;
    line-height: 1.2;
    @media ${DEVICE_WIDTHS.queries.tablet} {
      font-size: 1.3rem;
    }
  `,
  footer: css`
    font-family: ${FONTS.default};
    color: ${SEMANTIC_COLORS.bodyType};
    opacity: 0.8;
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.2;
    @media ${DEVICE_WIDTHS.queries.tablet} {
      font-size: 1rem;
    }
    &:not(:last-of-type) {
      padding-bottom: 0.25em;
    }
  `,
  largeHeader: css`
    font-family: ${FONTS.default};
    color: ${SEMANTIC_COLORS.headerType};
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 900;
    @media ${DEVICE_WIDTHS.queries.tablet} {
      font-size: 3.75rem;
    }
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
