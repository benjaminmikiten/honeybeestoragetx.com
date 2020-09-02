import React from 'react'
import styled from 'styled-components';
import { useAPI } from '../../hooks/useAPI';
import { Loader } from '../Loader';

const StyledAvailableUnits = styled.div``;
const StyledAvailableUnit = styled.div``;

export const Unit = ({ }) => {
  return (
    <div>
      UNIT
    </div>
  )
};
export const Units = ({ units }) => {
  return (
    <div>
      {units.map((u, i) => {
        return <Unit {...u} key={i} />
      })}
    </div>
  )
};

const StyledAvailableUnitsListing = styled.div`
  ${({ theme }) => theme.grid.LayoutContainer};
`;

export const AvailableUnitsListing = () => {
  const { data } = useAPI('/location');

  return (
    <StyledAvailableUnitsListing>
      {data ? <Units units={data.Location.Units} /> : <Loader />}
    </StyledAvailableUnitsListing>
  )
}