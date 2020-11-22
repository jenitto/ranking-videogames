import React, { createContext, useContext, useMemo, useState } from "react";

const Context = createContext(null);

function useSafeContext(TheContext) {
  const value = useContext(TheContext);
  if (!value)
    throw new Error("You need encapsulate the app with <GlobalProvider>");
  return value;
}

export const useGlobalLoading = () => useSafeContext(Context);

const GlobalLoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading, setIsLoading]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default GlobalLoaderProvider;
