import { createContext, useContext, useState } from "react";

const WindowsContext = createContext(null);

export const WindowsProvider = ({ children }) => {
  const [windows, setWindows] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  const [zIndices, setZIndices] = useState({
    github: 1,
    note: 1,
    resume: 1,
    spotify: 1,
    cli: 1,
  });

  const focusWindow = (windowName) => {
    const maxZIndex = Math.max(...Object.values(zIndices));
    setZIndices((prevZIndices) => ({
      ...prevZIndices,
      [windowName]: maxZIndex + 1,
    }));
  };

  const toggleWindow = (windowName) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowName]: !prevWindows[windowName],
    }));
  };

  return (
    <WindowsContext.Provider value={{ windows, toggleWindow, focusWindow, zIndices }}>
      {children}
    </WindowsContext.Provider>
  );
};

export const useWindows = () => {
  const context = useContext(WindowsContext);
  if (!context) {
    throw new Error("useWindows must be used within a WindowsProvider");
  }
  return context;
};
