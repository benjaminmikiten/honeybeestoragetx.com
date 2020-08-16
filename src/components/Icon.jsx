import React from "react";
import styled from "styled-components";

const StyledIcon = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 35px;

    @media ${({ theme }) => theme.device.tablet} {
      height: 38px;
    }

    path {
      fill: white;
    }
  }
`;

export const Icon = ({ children }) => {
  return <StyledIcon>{children}</StyledIcon>;
};
