import React, { createContext, useState } from "react";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [contextData, setContextData] = useState("");

  return (
    <DataContext.Provider value={[ contextData, setContextData ]}>
      {children}
    </DataContext.Provider>
  );
};
