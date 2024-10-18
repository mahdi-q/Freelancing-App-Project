import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isToggleOpen, setIsToggleOpen }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggle() {
  const context = useContext(ToggleContext);

  if (context === undefined)
    throw new Error("ToggleContext was used outside of ToggleProvider");

  return context;
}
