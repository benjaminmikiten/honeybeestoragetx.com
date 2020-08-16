import React from "react";
import styled from "styled-components";
import { LinkButton } from "../components/LinkButton";

import { Icon } from "../components/Icon";
import { ReactComponent as PhoneSVG } from "./icon-phone.svg";
import { ReactComponent as LocationSVG } from "./icon-location.svg";

const StyledPane = styled.div`
  ${({ theme }) => theme.grid.GridChild};
  flex: 0 0 auto;
  padding-bottom: 2rem;

  &:nth-of-type(1) {
    width: 100%;
    @media ${({ theme }) => theme.device.desktop} {
      width: calc((8 / 12) * 100%);
    }
  }
  &:nth-of-type(2) {
    width: 100%;
    @media ${({ theme }) => theme.device.desktop} {
      width: calc((4 / 12) * 100%);
    }
  }
  &:nth-of-type(3) {
    width: 100%;
    display: flex;
    justify-content: center;
    @media ${({ theme }) => theme.device.tablet} {
      justify-content: flex-start;
    }
  }

  h2 {
    ${({ theme }) => theme.type.largeHeader};
    text-align: left;
    @media ${({ theme }) => theme.device.tabletOnly} {
      text-align: center;
      margin: 0 auto;
      max-width: 820px;
    }
    @media ${({ theme }) => theme.device.tablet} {
    }
  }
`;

const StyledFooter = styled.div`
  padding: 2.5rem 0;
  ${({ theme }) => theme.grid.LayoutContainer};
  width: 100%;
  > div {
    ${({ theme }) => theme.grid.GridParent};
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const TelephoneNumber = styled.a`
  text-decoration: none;
  ${({ theme }) => theme.type.body};
`;

const Address = styled.a`
  ${({ theme }) => theme.type.body};
`;

const StyledContactItem = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 230px;
  padding-bottom: 1rem;

  span {
    ${({ theme }) => theme.type.body};
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
  justify-content: center;
  @media ${({ theme }) => theme.device.tabletOnly} {
    justify-content: space-around;
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

export const Footer = ({ children }) => {
  return (
    <StyledFooter>
      <div>
        <StyledPane>
          <h2>Covered boat and RV storage in Central&nbsp;Texas</h2>
        </StyledPane>
        <StyledPane>
          <ContactItems>
            <ContactItem href={`tel:254-760-2565`} icon={<PhoneSVG />}>
              (254) 760-2565
            </ContactItem>

            <ContactItem href={`https://g.page/Honey-Bee-Storage?share`} icon={<LocationSVG />}>
              13417 Shaw Road, Rogers, TX 76569
            </ContactItem>
          </ContactItems>
        </StyledPane>
        <StyledPane>
          <LinkButton href={"https://www.uhaul.com/Locations/Self-Storage-near-Rogers-TX-76569/1035094/"}>See available units</LinkButton>
        </StyledPane>
      </div>
    </StyledFooter>
  );
};
