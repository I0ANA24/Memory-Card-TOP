import React, { useState } from "react";
import StartGame from "./components/StartGame/StartGame";
import DiffPage from "./components/Difficulties/DiffPage";

const App = () => {
  const [difficulty, setDifficulty] = useState("Start");

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url(/background.gif)] bg-center bg-cover p-4 sm:p-10">
      {difficulty === "Start" && <StartGame setDifficulty={setDifficulty} />}
      {difficulty !== "Start" && <DiffPage />}
    </div>
  );
};

export default App;
