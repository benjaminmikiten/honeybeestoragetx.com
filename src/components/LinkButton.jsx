import React, { useState } from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const SETTINGS = {
  small: {
    height: 37,
    borderWidth: 4,
  },
  large: {
    height: 43,
    borderWidth: 4,
  },
};

const StyledButton = styled(motion.a)`
  ${({ theme }) => theme.type.body};

  outline: 0;
  border: none;
  border: 0;
  font-weight: bold;
  width: auto;
  cursor: pointer;
  padding: 0 1rem;

  ${({ variation }) => {
    switch (variation) {
      case "primary":
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.active};
          color: ${({ theme }) => theme.colors.blue};
          border-color: ${({ theme }) => theme.colors.active};
        `;
    }
  }};

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.active};
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  transition: all 0.3s ease;

  border-style: solid;
  border-width: ${SETTINGS.small.borderWidth}px;
  height: ${SETTINGS.small.height}px;
  line-height: ${SETTINGS.small.height - SETTINGS.small.borderWidth * 2}px;
  font-size: 1rem;
  text-align: center;
  display: block;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    width: auto;
    display: inline-flex;
    font-size: 1.2rem;
    border-width: ${SETTINGS.large.borderWidth}px;
    height: ${SETTINGS.large.height}px;
    line-height: ${SETTINGS.large.height - SETTINGS.large.borderWidth * 2}px;
  }
`;

export const Button = ({ children, variation = "primary", ...rest }) => {
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
    <StyledButton as={"button"} variation={variation} initial={false} animate={animation} transition={transition} onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)} {...rest}>
      {children}
    </StyledButton>
  );
};

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
    <StyledButton as={"a"} variation={variation} initial={false} animate={animation} transition={transition} onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)} {...rest} target={"_blank"} rel={"noreferrer noopenner"}>
      {children}
    </StyledButton>
  );
};
