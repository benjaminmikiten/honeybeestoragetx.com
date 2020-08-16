import { useMediaQuery } from "react-responsive";
import { ThemeSettings } from "../styles/Theme";

export function useDesktopBreakpoint() {
  return useMediaQuery({ query: ThemeSettings.device.desktop });
}
