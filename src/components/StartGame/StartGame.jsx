import React from "react";
import Button from "./Button";

const Intro = () => {
  return (
    <div className="container flex flex-col justify-center items-center gap-8 pb-8">
      <img src="/logo.png" alt="logo" />
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-8xl text-white text-shadow-lg text-shadow-neutral-500">
          Memory Game
        </h1>
        <div className="flex gap-4 justify-center items-center">
          <Button name="Easy" />
          <Button name="Medium" />
          <Button name="Hard" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
