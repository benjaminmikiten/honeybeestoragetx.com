import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useAPI } from "../../hooks/useAPI";
import { Loader } from "../Loader";
import { LinkButton } from "../LinkButton";

interface UnitData {
  Height?: number;
  Monthly?: number;
  Width?: number;
  Length?: number;
  VacantUnits?: number;
  TotalUnits?: number;
  SizeDescriptionsField?: string[];
  BonusComments?: string;
}

interface UnitProps extends UnitData {}

function Unit({
  Height,
  Monthly,
  Width,
  Length,
  VacantUnits,
  TotalUnits,
  SizeDescriptionsField,
  BonusComments,
}: UnitProps) {
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
            <p className="text-dark text-base md:text-lg m-0">{BonusComments}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface UnitsProps {
  units?: UnitData[];
}

function Units({ units = [] }: UnitsProps) {
  return (
    <div>
      <div className="flex flex-col">
        {units.map((u, i) => (
          <Unit {...u} key={i} />
        ))}
      </div>
    </div>
  );
}

interface LocationData {
  Location?: {
    Units?: UnitData[];
  };
  error?: boolean;
  message?: string;
}

export const AvailableUnitsListing = forwardRef<HTMLDivElement>(
  function AvailableUnitsListing(_props, ref) {
    const { data } = useAPI<LocationData>("/location");

    return (
      <div ref={ref} className="w-full">
        <div className="border-t border-white flex flex-col justify-center py-9 lg:justify-start [&_h2]:text-white [&_h2]:text-2xl [&_h2]:md:text-[2.5rem] [&_h2]:leading-tight [&_h2]:font-bold [&_h2]:mb-2">
          {data ? (
            <>
              <h2>Available Units</h2>
              <Units units={data.Location?.Units} />
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
);
