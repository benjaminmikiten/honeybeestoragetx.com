import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useMobileBreakpoint } from "../hooks/useMobileBreakpoint";
import { Button } from "./LinkButton";
import { ReactComponent as LogoSVG } from "./logo-honeyBeeStorage.svg";

const StyledHero = styled.div`
  flex: 0 0 auto;
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

const StyledBadge = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  ${({ theme }) => theme.grid.LayoutContainer};
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.mobileOnly} {
    a,
    button {
      display: none;
    }
  }
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

export const Hero = ({ children, logo, background, handleClickScroll }) => {
  const isMobile = useMobileBreakpoint();

  const initial = {
    opacity: 0,
    transform: !isMobile ? `translateY(50px) scale(0.95)` : `translateY(0) scale(1)`,
  };
  const animation = {
    opacity: 1,
    transform: `translateY(0px) scale(1)`,
  };
  const transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
  };
  return (
    <StyledHero>
      <StyledBadge initial={initial} animate={animation} transition={transition}>
        <Logo>
          <LogoSVG />
        </Logo>

        <Button onClick={handleClickScroll}>See Available Units</Button>
      </StyledBadge>
      <Background background={background} />
    </StyledHero>
  );
};
