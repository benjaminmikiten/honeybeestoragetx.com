import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
`;

export const Footer = ({children}) => {
  return (
    <StyledFooter>
      {children}
    </StyledFooter>
  )
}
