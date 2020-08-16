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
    @media ${({ theme }) => theme.device.tabletOnly} {
      justify-content: center;
    }
  }

  h2 {
    ${({ theme }) => theme.type.largeHeader};
    @media ${({ theme }) => theme.device.tabletOnly} {
      max-width: 820px;
      margin: 0 auto;
      text-align: center;
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

const Address = styled.address`
  ${({ theme }) => theme.type.body};
`;

const StyledContactItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 230px;
  padding-bottom: 1rem;

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
  @media ${({ theme }) => theme.device.tabletOnly} {
    justify-content: space-around;
  }
`;

const ContactItem = ({ icon, children }) => {
  return (
    <StyledContactItem>
      <Icon>{icon}</Icon>
      <div>{children}</div>
    </StyledContactItem>
  );
};

export const Footer = ({ children }) => {
  return (
    <StyledFooter>
      <div>
        <StyledPane>
          <h2>Covered boat and RV storage in central Texas</h2>
        </StyledPane>
        <StyledPane>
          <ContactItems>
            <ContactItem icon={<PhoneSVG />}>
              <TelephoneNumber href={`tel:254-760-2565`}>(254) 760-2565</TelephoneNumber>
            </ContactItem>

            <ContactItem icon={<LocationSVG />}>
              <Address href={`tel:254-760-2565`}>13417 Shaw Road, Rogers, TX 76569</Address>
            </ContactItem>
          </ContactItems>
        </StyledPane>
        <StyledPane>
          <LinkButton>See available units</LinkButton>
        </StyledPane>
      </div>
    </StyledFooter>
  );
};
