import React, { useEffect, useState } from "react";
import Main from "./Main";
import reducer, { initialState } from "./appState/reducer.js";
import { StateProvider } from "./appState/StateProvider";
import { LogBox } from "react-native";

const App = () => {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  );
};
export default App;
