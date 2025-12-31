import { useState, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonBaseClasses = `
  font-sans text-white text-base md:text-lg font-bold
  outline-none border-none cursor-pointer px-4
  bg-yellow text-blue border-yellow border-solid border-4
  hover:border-yellow hover:bg-blue hover:text-yellow
  transition-all duration-300
  h-[37px] leading-[29px] text-center block w-full
  md:w-auto md:inline-flex md:h-[43px] md:leading-[35px]
`;

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  const animation = {
    boxShadow: hovered
      ? "0px 5px 10px rgba(0,0,0,0.2)"
      : "0px 0px 0px rgba(0,0,0,0)",
  };

  const transition = {
    type: "spring",
    damping: 20,
    mass: 1,
    velocity: 50,
    stiffness: 100,
  };

  return (
    <motion.button
      className={buttonBaseClasses}
      initial={false}
      animate={animation}
      transition={transition}
      onMouseLeave={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

interface LinkButtonProps extends Omit<HTMLMotionProps<"a">, "ref"> {
  children: ReactNode;
}

export function LinkButton({ children, ...rest }: LinkButtonProps) {
  const [hovered, setHovered] = useState(false);

  const animation = {
    boxShadow: hovered
      ? "0px 5px 10px rgba(0,0,0,0.2)"
      : "0px 0px 0px rgba(0,0,0,0)",
  };

  const transition = {
    type: "spring",
    damping: 20,
    mass: 1,
    velocity: 50,
    stiffness: 100,
  };

  return (
    <motion.a
      className={buttonBaseClasses}
      initial={false}
      animate={animation}
      transition={transition}
      onMouseLeave={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      target="_blank"
      rel="noreferrer noopener"
      {...rest}
    >
      {children}
    </motion.a>
  );
}
