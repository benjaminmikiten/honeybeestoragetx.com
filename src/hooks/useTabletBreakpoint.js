import { useMediaQuery } from "react-responsive";
import { ThemeSettings } from "../styles/Theme";

export function useTabletBreakpoint() {
  return useMediaQuery({ query: ThemeSettings.device.tabletOnly });
}
