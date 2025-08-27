import React from "react";

const Button = ({ name, setDifficulty }) => {
  return (
    <button
      onClick={() => setDifficulty({ name })}
      className="bg-lime-500 px-8 sm:px-10 landscape:px-8 py-3 sm:py-4 landscape:py-3 w-fit h-fit border-b-6 border-b-lime-700 rounded-xl text-3xl sm:text-4xl landscape:text-3xl text-white text-shadow-sm text-shadow-neutral-800/80 cursor-pointer hover:scale-102 hover:transform-all hover:duration-300 tracking-widest"
    >
      {name}
    </button>
  );
};

export default Button;
