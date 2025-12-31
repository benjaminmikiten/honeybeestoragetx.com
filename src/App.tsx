import { createContext } from "react";
import { Routes } from "./Routes";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AppContextType {}

export const AppContext = createContext<AppContextType>({});

export function App() {
  const context: AppContextType = {};

  return (
    <AppContext.Provider value={context}>
      <Routes />
    </AppContext.Provider>
  );
}
