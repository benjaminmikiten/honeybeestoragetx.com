import React from "react";
import styled from "styled-components";
import { LinkButton } from "./LinkButton";
import { ReactComponent as LogoSVG } from "./logo-honeyBeeStorage.svg";

const StyledHero = styled.div`
  background-color: #ccc;
  position: relative;
  overflow: hidden;
  @media ${({ theme }) => theme.device.tablet} {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.desktop} {
    height: 480px;
  }
`;

const Logo = styled.div`
  width: 140px;
  @media ${({ theme }) => theme.device.tablet} {
    width: 260px;
    margin-bottom: 20px;
  }
`;

const StyledBadge = styled.div`
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  ${({ theme }) => theme.grid.LayoutContainer};
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    background-color: transparent;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Background = styled.div`
  background-image: url(${(props) => props.background});
  background-position: center center;
  background-size: cover;
  background-color: #ddd;
  position: relative;
  width: 100%;
  &:before {
    content: "";
    width: 100%;
    display: block;
    padding-bottom: calc((232 / 414) * 100%);
  }

  @media ${({ theme }) => theme.device.tablet} {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const Hero = ({ children, logo, background }) => {
  return (
    <StyledHero>
      <StyledBadge>
        <Logo>
          <LogoSVG />
        </Logo>
        <LinkButton href={"https://www.uhaul.com/Locations/Self-Storage-near-Rogers-TX-76569/1035094/"}>See available units</LinkButton>
      </StyledBadge>
      <Background background={background} />
    </StyledHero>
  );
};
