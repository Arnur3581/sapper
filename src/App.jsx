import { useState } from "react";

import { Board } from "./components/Board/Board";
import { Mode } from "./components/Mode/Mode";

import "./index.css";

export const App = () => {
  const [mode, setMode] = useState("easy");
  return (
    <>
      <Board mode={mode} />
      <Mode setMode={setMode} />
    </>
  );
};
