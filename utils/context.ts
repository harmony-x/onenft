import { AuthenticationStatus } from "@rainbow-me/rainbowkit";
import React from "react";

type ContextType = {
  authStatus: AuthenticationStatus;
  setAuthStatus: (status: AuthenticationStatus) => void;
};

const AppContext = React.createContext<ContextType>({
  authStatus: "loading",
  setAuthStatus: () => {},
});

export const AppContextProvider = AppContext.Provider;
export default AppContext;
