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
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.default};
  color: #000;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: inline-flex;
  width: auto;

  padding: 0 1rem;

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
  return (
    <StyledLinkButton {...rest} target={"_blank"} rel={"noreferrer noopenner"}>
      <span>{children}</span>
    </StyledLinkButton>
  );
};
