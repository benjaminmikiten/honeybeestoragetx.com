import React from "react";
import styled from "styled-components";
import { Button } from "./LinkButton";
import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { ReactComponent as PhoneSVG } from "./icon-phone.svg";
import { ReactComponent as LocationSVG } from "./icon-location.svg";
import { ReactComponent as EmailSVG } from "./icon-email.svg";
import { Spacer } from "./Spacer";

const StyledPane = styled(motion.div)`
  ${({ theme }) => theme.grid.GridChild};
  flex: 0 0 auto;
  /* padding-bottom: 2rem; */

  &:nth-of-type(1) {
    width: 100%;
    order: 2;
    @media ${({ theme }) => theme.device.tablet} {
      order: 1;
    }
    @media ${({ theme }) => theme.device.desktop} {
      width: calc((8 / 12) * 100%);
    }
  }
  &:nth-of-type(2) {
    width: 100%;
    order: 3;
    @media ${({ theme }) => theme.device.desktop} {
      order: 2;
      width: calc((4 / 12) * 100%);
    }
  }
  &:nth-of-type(3) {
    width: 100%;
    display: flex;
    justify-content: center;
    order: 2;
    @media ${({ theme }) => theme.device.tablet} {
      order: 3;
      justify-content: flex-start;
      display: none;
    }
  }

  p {
    ${({ theme }) => theme.type.body};
    text-align: left;
    @media ${({ theme }) => theme.device.tabletOnly} {
      text-align: center;
    }
  }
  h2 {
    ${({ theme }) => theme.type.giantHeader};
    text-align: left;
    padding-bottom: 0.25em;
    @media ${({ theme }) => theme.device.tabletOnly} {
      text-align: center;
      margin: 0 auto;
      max-width: 820px;
    }
    @media ${({ theme }) => theme.device.tablet} {
    }
  }
  h2 + p {
    font-weight: 400;
  }
`;

const StyledBody = styled.div`
  padding: 2.5rem 0;

  width: 100%;
  > div {
    ${({ theme }) => theme.grid.GridParent};
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StyledContactItem = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 0.5rem;
  padding-bottom: 1rem;

  span {
    ${({ theme }) => theme.type.body};
    font-weight: 600;
    padding-left: 0.5rem;
  }

  svg path {
    fill: ${({ theme }) => theme.colors.active};
  }
  &:hover svg path {
    fill: ${({ theme }) => theme.colors.activeHover};
  }

  &::nth-of-type(1) {
    @media ${({ theme }) => theme.mobileOnly} {
      order: 2;
    }
  }
  &::nth-of-type(2) {
    @media ${({ theme }) => theme.mobileOnly} {
      order: 1;
    }
  }

  > div:first-child {
    flex: 0 0 auto;
  }
  > div:last-child {
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
  }
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media ${({ theme }) => theme.device.tabletOnly} {
    justify-content: space-around;
  }
  @media ${({ theme }) => theme.device.desktop} {
  }
`;

const ContactItem = ({ href, icon, children }) => {
  return (
    <StyledContactItem href={href} target={"_blank"} rel={"noreferrer noopenner"}>
      <Icon>{icon}</Icon>
      <span>{children}</span>
    </StyledContactItem>
  );
};

export const Body = ({ children, handleClickScroll }) => {
  const initialAnimation = {
    opacity: 0,
    transform: `translateY(20px)`,
  };
  const transition = {
    type: "spring",
    mass: 2,
    damping: 15,
    stiffness: 100,
  };
  const paneAnimation = {
    opacity: 1,
    transform: `translateY(0px)`,
  };

  const EMAIL_ADDRESS = `info@honeybeestoragetx.com`;
  const EMAIL_SUBJECT = `Honey Bee Storage Question`;
  const mailto = `mailto:${EMAIL_ADDRESS}?subject=${EMAIL_SUBJECT}`;

  return (
    <StyledBody>
      <div>
        <StyledPane animate={paneAnimation} initial={initialAnimation} transition={{ ...transition, delay: 0 }}>
          <h2>Covered boat and RV storage in Central&nbsp;Texas</h2>
          <p>
            Powered by U-Haul<sup>*</sup>
          </p>
          <Spacer height={20} />
        </StyledPane>
        <StyledPane animate={paneAnimation} initial={initialAnimation} transition={{ ...transition, delay: 0.3 }}>
          <ContactItems>
            <ContactItem href={`tel:254-760-2565`} icon={<PhoneSVG />}>
              (254) 760-2565
            </ContactItem>

            <ContactItem href={`https://g.page/Honey-Bee-Storage?share`} icon={<LocationSVG />}>
              <address>
                13417 Shaw Road, <br />
                Rogers, TX, 76569
              </address>
            </ContactItem>
            <ContactItem href={mailto} icon={<EmailSVG />}>
              info@honeybeestoragetx.com
            </ContactItem>
          </ContactItems>
        </StyledPane>
        <StyledPane animate={paneAnimation} initial={initialAnimation} transition={{ ...transition, delay: 0.6 }}>
          <Button onClick={handleClickScroll}>See available units</Button>
        </StyledPane>
      </div>
    </StyledBody>
  );
};
