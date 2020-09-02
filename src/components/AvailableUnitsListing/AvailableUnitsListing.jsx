import React from "react";
import styled from "styled-components";
import { useAPI } from "../../hooks/useAPI";
import { Loader } from "../Loader";
import { LinkButton } from "../LinkButton";
import { Table } from "../Table";
import { transparentize } from "polished";

const StyledUnits = styled.div`
  > div {
    display: flex;
  }
`;

const Badge = styled.div`
  display: inline-block;
  ${({ theme }) => theme.grid.GridChild};
  ${({ theme }) => theme.type.smallHeader};
`;

const StyledUnit = styled.div`
  width: 100%;
  background-color: ${({ theme }) => transparentize(0, theme.colors.white)};
  padding: 16px;

  > div {
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-areas:
      "title"
      "price"
      "cta"
      "details";

    @media ${({ theme }) => theme.device.tablet} {
      grid-template-areas:
        "title price"
        "cta details";
    }
    > * {
      align-self: center;
    }
  }

  h3 {
    ${({ theme }) => theme.type.largeHeader};
  }

  h3:nth-of-type(1) {
    ${({ theme }) => theme.type.largeHeader};
    color: ${({ theme }) => theme.colors.dark};
    grid-area: title;
  }
  h3:nth-of-type(2) {
    ${({ theme }) => theme.type.mediumHeader};
    grid-area: price;
    color: ${({ theme }) => theme.colors.tertiary};
    @media ${({ theme }) => theme.device.tablet} {
      text-align: right;
    }
  }
  > div > :nth-child(3) {
    grid-area: cta;
    color: ${({ theme }) => theme.colors.grey};
  }
  h3:nth-of-type(3) {
    ${({ theme }) => theme.type.smallHeader};
    grid-area: details;
    color: ${({ theme }) => theme.colors.grey};

    @media ${({ theme }) => theme.device.tablet} {
      text-align: right;
    }
  }
`;

export const Unit = (props) => {
  const { Height, Monthly, Length, SquareFootage, UnitSize, Width, VacantUnits, CubicFootage, TotalUnits } = props;

  const tableData = [["Height", Height], ["Length", Length], []];
  return (
    <StyledUnit>
      <div>
        <h3>{`${Height}′⨯${Length}′⨯${Height}′`}</h3>
        <h3>{`$${Monthly}/mo`}</h3>
        <div>
          <LinkButton href={`https://www.uhaul.com/Locations/Self-Storage-near-Rogers-TX-76569/1035094/`} variation={"uhaul"}>
            Rent Now at U-Haul.com
          </LinkButton>
        </div>
        <h3>{`${VacantUnits}/${TotalUnits} available`}</h3>
      </div>
      {/* <Table tableData={tableData} /> */}
    </StyledUnit>
  );
};

export const Units = ({ units }) => {
  return (
    <StyledUnits>
      <div>
        {units.map((u, i) => {
          return <Unit {...u} key={i} />;
        })}
      </div>
    </StyledUnits>
  );
};

const StyledAvailableUnitsListing = styled.div`
  ${({ theme }) => theme.grid.LayoutContainer};
  width: 100%;
  > div {
    border-top: solid 1px ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px 0;
    @media ${({ theme }) => theme.device.desktop} {
      justify-content: flex-start;
    }

    h2 {
      ${({ theme }) => theme.type.largeHeader};
      margin-bottom: 0.5em;
    }
  }
`;

export const AvailableUnitsListing = () => {
  const { data } = useAPI("/location");

  return (
    <StyledAvailableUnitsListing>
      <div>
        {data ? (
          <>
            <h2>Available Unit Types</h2>
            <Units units={data.Location.Units} />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </StyledAvailableUnitsListing>
  );
};
