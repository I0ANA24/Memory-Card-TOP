import React from "react";
import Intro from "./components/StartGame/StartGame";

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url(/background.gif)] bg-center bg-cover">
      <Intro />
    </div>
  );
};

export default App;
