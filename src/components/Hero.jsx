import React from 'react'
import styled from 'styled-components'


const StyledHero = styled.a`

`;

export const Hero = ({children}) => {
  return (
    <StyledHero>
        {children}
    </StyledHero>
  )
}
