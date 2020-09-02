import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  > main {
    ${({ theme }) => theme.grid.LayoutContainer};
    height: 100%;
    flex: 1 1 auto;
  }
`;

export const Page = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};
