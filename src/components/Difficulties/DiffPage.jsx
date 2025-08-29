import React, { useState } from "react";

const DiffPage = ({ score, highScore, children }) => {
  return (
    <div className="container flex flex-col justify-center items-center gap-0 w-full h-full relative py-4">
      <header className="w-full h-[10%] sm:h-[15%] flex justify-between items-baseline">
        <picture className="hidden sm:block">
          <source media="(max-width: 640px)" srcSet="/myIcon.png" />
          <img src="/logo.png" alt="logo" className="max-h-full max-w-[45%]" />
        </picture>
        <div className="w-60 h-[15%] absolute right-[50%] translate-x-[50%] sm:right-0 sm:translate-x-0 -top-4 bg-[#03b0b9] flex flex-col justify-center rounded-xl pt-4 px-10 text-white text-3xl">
          <p>Score: {score} </p>
          <p>High Score: {highScore} </p>
        </div>
      </header>
      <main className="h-[70%] sm:h-[70%] w-full flex flex-wrap justify-center items-center gap-2 overflow-y-scroll hide-scrollbar">
        {children}
      </main>
      <footer className="h-[15%] w-full flex justify-center items-center">
        <p className="text-4xl sm:text-5xl text-white text-center">
          Don't click the same card twice
        </p>
      </footer>
    </div>
  );
};

export default DiffPage;
