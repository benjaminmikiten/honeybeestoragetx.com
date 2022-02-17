import React from "react";
import styled from "styled-components";
import { useAPI } from "../../hooks/useAPI";
import { Loader } from "../Loader";
import { LinkButton } from "../LinkButton";
import { motion } from "framer-motion";
import { transparentize } from "polished";

const PriceArea  = styled.div`
    grid-area: price;
    h3 {
      ${({ theme }) => theme.type.mediumHeader};
      color: ${({ theme }) => theme.colors.tertiary};
    }
    @media ${({ theme }) => theme.device.tablet} {
      text-align: right;
    }
`;
const CTAArea = styled.div`
  grid-area: cta;
`;
const TitleArea = styled.div`
  h3 {
    ${({ theme }) => theme.type.largeHeader};
    color: ${({ theme }) => theme.colors.dark};
  }
  grid-area: title;
  `;
const DetailsArea = styled.div`
    grid-area: details;

    > h3 {
      ${({ theme }) => theme.type.smallHeader};
      color: ${({ theme }) => theme.colors.grey};
    }

    @media ${({ theme }) => theme.device.tablet} {
      text-align: right;
    }
`;

const StyledUnits = styled.div`
  > div {
    display: flex;
  }
`;

const StyledUnitLayout = styled.div`
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
`;

const StyledUnit = styled(motion.div)`
  width: 100%;
  background-color: ${({ theme }) => transparentize(0, theme.colors.white)};
  padding: 16px;
`;

export const Unit = (props) => {
  const { Height = 14, Monthly = 100, Width = 28, Length = 14, VacantUnits = null, TotalUnits = null } = props;

  const initial = {
    opacity: 0,
    transform: `translateY(20%)`,
  };

  const animation = {
    opacity: 1,
    transform: `translateY(0px)`,
  };
  const transition = {
    type: "spring",
  };

  const showAvailability = VacantUnits && TotalUnits;

  return (
    <StyledUnit initial={initial} animate={animation} transition={transition}>
      <StyledUnitLayout>
        <TitleArea>
          <h3>{`${Length}′⨯${Width}′⨯${Height}′`}</h3>
        </TitleArea>
        <PriceArea>
          <h3>{`$${Monthly}/mo`}<sup>**</sup></h3>
        </PriceArea>
        <CTAArea>
          <LinkButton href={`https://www.uhaul.com/Locations/Self-Storage-near-Rogers-TX-76569/1035094/`}>Rent Now at U-Haul.com</LinkButton>
        </CTAArea>
        <DetailsArea>
        {showAvailability ? (
          <h3>{`${VacantUnits} available`}</h3>
          ) : null}
          </DetailsArea>
      </StyledUnitLayout>
    </StyledUnit>
  );
};

export const Units = ({ units = [{}] }) => {
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
  /* ${({ theme }) => theme.grid.LayoutContainer}; */
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

export const AvailableUnitsListing = React.forwardRef((props, ref) => {
  const { data } = useAPI("/location");

  return (
    <StyledAvailableUnitsListing ref={ref}>
      <div>
        {data ? (
          <>
            <h2>Available Units</h2>
            <Units units={data.Location?.Units} />
          </>
        ) : (
          <Loader />
        )}
      </div>
    </StyledAvailableUnitsListing>
  );
});
