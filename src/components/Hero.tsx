import { motion } from "framer-motion";
import { useMobileBreakpoint } from "../hooks/useBreakpoint";
import { Button } from "./LinkButton";
import LogoSVG from "./logo-honeyBeeStorage.svg?react";

interface HeroProps {
  background: string;
  handleClickScroll: () => void;
}

export function Hero({ background, handleClickScroll }: HeroProps) {
  const isMobile = useMobileBreakpoint();

  const initial = {
    opacity: 0,
    transform: !isMobile
      ? `translateY(50px) scale(0.95)`
      : `translateY(0) scale(1)`,
  };

  const animation = {
    opacity: 1,
    transform: `translateY(0px) scale(1)`,
  };

  const transition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
  };

  return (
    <div className="flex-shrink-0 relative overflow-hidden md:h-[400px] lg:h-[480px] md:flex md:justify-center md:items-center">
      {/* Badge */}
      <motion.div
        className="bg-blue w-full px-[18px] md:px-12 lg:px-16 max-w-container mx-auto h-[77px] flex justify-center items-center max-md:[&_button]:hidden md:bg-transparent md:relative md:z-[2] md:flex-col"
        initial={initial}
        animate={animation}
        transition={transition}
      >
        <div className="w-40 md:w-[260px] md:mb-5">
          <LogoSVG />
        </div>
        <Button onClick={handleClickScroll}>See Available Units</Button>
      </motion.div>

      {/* Background */}
      <motion.div
        className="bg-cover bg-center relative w-full before:content-[''] before:w-full before:block before:pb-[calc((232/414)*100%)] md:absolute md:z-[1] md:inset-0 md:before:hidden"
        style={{ backgroundImage: `url(${background})` }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      />
    </div>
  );
}
