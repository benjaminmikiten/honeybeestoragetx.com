import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const StyledLinkButton = styled.a`

`;

export const LinkButton = ({children}) => {
  return (
    <StyledLinkButton {...rest} target={'_blank'} ref={'noreferrer noopenner'}>
        {children}
    </StyledLinkButton>
  )
}
