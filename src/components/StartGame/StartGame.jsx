import React from "react";
import Button from "./Button";

const Intro = ({ setDifficulty }) => {
  return (
    <div className="container flex flex-col justify-center items-center gap-4 sm:gap-8 landscape:gap-2 pb-8">
      <img src="/logo.png" alt="logo" className="max-w-full" />
      <div className="flex flex-col justify-center items-center gap-8 landscape:gap-4">
        <h1 className="text-7xl sm:text-8xl landscape:text-7xl text-white text-shadow-lg text-shadow-neutral-500 text-center">
          Memory Game
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
          <Button name="Easy" setDifficulty={setDifficulty} />
          <Button name="Medium" setDifficulty={setDifficulty} />
          <Button name="Hard" setDifficulty={setDifficulty} />
        </div>
      </div>
    </div>
  );
};

export default Intro;
