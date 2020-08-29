import React, { useState } from "react";
import styled from "styled-components";
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
  color: #000;
  display: inline-flex;
  width: auto;
  cursor: pointer;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.colors.active};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.activeHover};
  }

  height: ${SETTINGS.small.height}px;
  line-height: ${SETTINGS.small.height}px;
  font-size: 1rem;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.2rem;
    height: ${SETTINGS.large.height}px;
    line-height: ${SETTINGS.large.height}px;
  }
`;

export const LinkButton = ({ children, ...rest }) => {
  const [hovered, setHovered] = useState(false);

  const animation = {
    transform: hovered ? `translateY(-3px)` : `translateY(0px)`,
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
    <StyledLinkButton initial={false} animate={animation} transition={transition} onMouseLeave={() => setHovered(false)} onMouseOver={() => setHovered(true)} {...rest} target={"_blank"} rel={"noreferrer noopenner"}>
      {children}
    </StyledLinkButton>
  );
};
