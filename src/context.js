import { createContext } from "react";

export const ShopContext = createContext();

export const ContextProvider = ({ children }) => {
  const value = {
    example: "Hello From Context",
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
