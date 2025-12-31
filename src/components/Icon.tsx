import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
}

export function Icon({ children }: IconProps) {
  return (
    <div className="w-11 h-11 flex justify-center items-center [&_svg]:h-[35px] md:[&_svg]:h-[38px] [&_svg_path]:fill-yellow">
      {children}
    </div>
  );
}
