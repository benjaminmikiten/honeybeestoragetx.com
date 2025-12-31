import { createContext } from "react";
import { Routes } from "./Routes";

interface AppContextType {
  // Add context properties as needed
}

export const AppContext = createContext<AppContextType>({});

export function App() {
  const context: AppContextType = {};

  return (
    <AppContext.Provider value={context}>
      <Routes />
    </AppContext.Provider>
  );
}
