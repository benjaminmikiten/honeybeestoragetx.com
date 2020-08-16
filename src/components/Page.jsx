import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  min-height: 100vh;
`;

export const Page = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};
