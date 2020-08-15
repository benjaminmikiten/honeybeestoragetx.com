import React from 'react'
import styled from 'styled-components'

const StyledPage = styled.div`
`;

export const Page = ({children}) => {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}
