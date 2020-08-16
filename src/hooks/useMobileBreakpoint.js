import { useMediaQuery } from "react-responsive";
import { ThemeSettings } from "../styles/Theme";

export function useMobileBreakpoint() {
  return useMediaQuery({ query: ThemeSettings.device.mobileOnly });
}
