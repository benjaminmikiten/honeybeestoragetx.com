import React from "react";
import styled from "styled-components";

const SETTINGS = {
  small: {
    height: 37,
  },
  large: {
    height: 43,
  },
};

const StyledLinkButton = styled.a`
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
  font-size: 1.2rem;
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.2rem;
    height: ${SETTINGS.large.height}px;
    line-height: ${SETTINGS.large.height}px;
  }
`;

export const LinkButton = ({ children, ...rest }) => {
  return (
    <StyledLinkButton {...rest} target={"_blank"} rel={"noreferrer noopenner"}>
      {children}
    </StyledLinkButton>
  );
};
