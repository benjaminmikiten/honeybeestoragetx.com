import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const SETTINGS = {
  small: {
    height: 37,
  },
  large: {
    height: 43,
  },
};

const StyledLinkButton = styled(motion.a)`
  ${({ theme }) => theme.type.body};

  font-weight: bold;
  width: auto;
  cursor: pointer;
  padding: 0 1rem;

  ${({ variation }) => {
    switch (variation) {
      case "uhaul":
        return css`
          background-color: ${({ theme }) => theme.colors.uhaulBrand};
          color: ${({ theme }) => theme.colors.white};
        `;
      case "primary":
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.active};
          color: ${({ theme }) => theme.colors.bodyType};
        `;
    }
  }};

  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.activeHover};
  }

  height: ${SETTINGS.small.height}px;
  line-height: ${SETTINGS.small.height}px;
  font-size: 1rem;
  text-align: center;
  display: block;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    width: auto;
    display: inline-flex;
    font-size: 1.2rem;
    height: ${SETTINGS.large.height}px;
    line-height: ${SETTINGS.large.height}px;
  }
`;

export const LinkButton = ({ children, variation = "primary", ...rest }) => {
  const [hovered, setHovered] = useState(false);

  const animation = {
    boxShadow: hovered ? "0px 5px 10px rgba(0,0,0,0.2)" : "0px 0px 0px rgba(0,0,0,0)",
  };

  const transition = {
    type: "spring",
    damping: 20,
    mass: 1,
    velocity: 50,
    stiffness: 100,
  };

  return (
    <StyledLinkButton variation={variation} initial={false} animate={animation} transition={transition} onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)} {...rest} target={"_blank"} rel={"noreferrer noopenner"}>
      {children}
    </StyledLinkButton>
  );
};
