import React from 'react'
import styled from 'styled-components';
import { useAPI } from '../../hooks/useAPI';
import { Loader } from '../Loader';

const StyledUnits = styled.div``;
const StyledUnit = styled.div``;

const StyledTable = styled.table``;


export const Unit = (props) => {
  const { Height, Monthly, Length, SquareFootage, UnitSize, Width, VacantUnits, CubicFootage, TotalUnits } = props;

  return (
    <StyledUnit>
      <div>${UnitSize} Covered Storage Space</div>
      <StyledTable>

      </StyledTable>
    </StyledUnit>
  )
};


export const Units = ({ units }) => {
  return (
    <StyledUnits>
      {units.map((u, i) => {
        return <Unit {...u} key={i} />
      })}
    </StyledUnits>
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