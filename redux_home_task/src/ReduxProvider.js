import React, { useState, useEffect } from "react";
import { LocalizationContext } from "./LocalizationContext";

function ReduxProvider({ store, children }) {
  const [appState, setAppState] = useState(store.getState());
  const dispatch = store.dispatch;
  const contextValue = { language: appState.language, dispatch };

  useEffect(() => {
    store.subscribe(() => {
      const newState = store.getState();
      setAppState(newState);
    });
  }, [store]);
  
  return (
    <LocalizationContext.Provider value={contextValue}>
      {children}
    </LocalizationContext.Provider>
  );
}

export default ReduxProvider;
