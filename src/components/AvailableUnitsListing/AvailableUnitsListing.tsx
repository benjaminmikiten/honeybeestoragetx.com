import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useAPI } from "../../hooks/useAPI";
import { Loader } from "../Loader";
import { LinkButton } from "../LinkButton";
import type { Unit } from "../../types";

interface UnitCardProps {
  unit: Unit;
}

function UnitCard({ unit }: UnitCardProps) {
  const {
    Height,
    Monthly,
    Width,
    Length,
    VacantUnits,
    TotalUnits,
    SizeDescriptionsField,
    BonusComments,
  } = unit;

  if (!Height || !Monthly || !Width || !Length) {
    return null;
  }

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
  const hasSizeDescriptions =
    SizeDescriptionsField && SizeDescriptionsField.length > 0;
  const hasBonusComments = BonusComments && BonusComments.trim().length > 0;

  return (
    <motion.div
      className="w-full bg-white p-4"
      initial={initial}
      animate={animation}
      transition={transition}
    >
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 [grid-template-areas:'title'_'price'_'cta'_'details'_'sizeDescriptions'_'bonusComments'] md:[grid-template-areas:'title_price'_'cta_details'_'sizeDescriptions_sizeDescriptions'_'bonusComments_bonusComments'] [&>*]:self-center">
        {/* Title Area */}
        <div className="[grid-area:title]">
          <h3 className="text-dark text-2xl md:text-[2.5rem] leading-tight font-bold">{`${Length}′⨯${Width}′⨯${Height}′`}</h3>
        </div>

        {/* Price Area */}
        <div className="[grid-area:price] md:text-right">
          <h3 className="text-green text-2xl md:text-[2.5rem] leading-tight font-bold">
            {`$${Monthly}/mo`}
            <sup>**</sup>
          </h3>
        </div>

        {/* CTA Area */}
        <div className="[grid-area:cta]">
          <LinkButton href="https://www.uhaul.com/Locations/Self-Storage-near-Rogers-TX-76569/1035094/">
            Rent Now at U-Haul.com
          </LinkButton>
        </div>

        {/* Details Area */}
        <div className="[grid-area:details] md:text-right">
          {showAvailability && (
            <h3 className="text-grey text-lg md:text-xl leading-tight font-normal">{`${VacantUnits} available`}</h3>
          )}
        </div>

        {/* Size Descriptions Area */}
        {hasSizeDescriptions && (
          <div className="[grid-area:sizeDescriptions] text-left self-start">
            {SizeDescriptionsField.map((desc, index) => (
              <p key={index} className="text-dark text-base md:text-lg m-0">
                {desc}
              </p>
            ))}
          </div>
        )}

        {/* Bonus Comments Area */}
        {hasBonusComments && (
          <div className="[grid-area:bonusComments] text-left self-start">
            <p className="text-dark text-base md:text-lg m-0">
              {BonusComments}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface UnitsListProps {
  units: Unit[];
}

function UnitsList({ units }: UnitsListProps) {
  return (
    <div>
      <div className="flex flex-col">
        {units.map((unit, i) => (
          <UnitCard unit={unit} key={unit.UnitId || i} />
        ))}
      </div>
    </div>
  );
}

export const AvailableUnitsListing = forwardRef<HTMLDivElement>(
  function AvailableUnitsListing(_props, ref) {
    const { data } = useAPI("/location");

    const isError = data && "error" in data;
    const hasUnits = data && "Location" in data && data.Location?.Units;

    return (
      <div ref={ref} className="w-full">
        <div className="border-t border-white flex flex-col justify-center py-9 lg:justify-start [&_h2]:text-white [&_h2]:text-2xl [&_h2]:md:text-[2.5rem] [&_h2]:leading-tight [&_h2]:font-bold [&_h2]:mb-2">
          {isError ? (
            <p className="text-white">
              Unable to load units. Please try again later.
            </p>
          ) : hasUnits ? (
            <>
              <h2>Available Units</h2>
              <UnitsList units={data.Location.Units} />
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
);
