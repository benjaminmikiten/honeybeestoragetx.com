import React from "react";
import styled from "styled-components";
import moment from "moment";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  flex: 0 0 auto;
  padding: 1rem 0;
  > div {
    ${({ theme }) => theme.grid.LayoutContainer};
    text-align: center;
  }
  p {
    ${({ theme }) => theme.type.footer};
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>&copy; {moment().format("YYYY")} Honey Bee Storage</p>
        <p>
          <sup>*</sup> No trucks or trailers available to rent at this location.
        </p>
        <p>
          <sup>**</sup> Minimum 6 month lease.
        </p>
        <p>
          By providing your contact information, you consent to receive recurring messages from our business. Message frequency may vary. You may reply STOP to opt out at any time or HELP for additional information. Standard message and data rates may apply. We do not share your personal information with third parties for marketing purposes.
        </p>
      </div>
    </StyledFooter>
  );
};
