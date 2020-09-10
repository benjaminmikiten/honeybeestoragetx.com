import styled from "styled-components";

export const Spacer = styled.div`
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  width: ${({ width }) => (width ? `${width}px` : `100%`)};
  display: block;
`;
