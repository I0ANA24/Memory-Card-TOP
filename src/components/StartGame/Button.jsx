import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-lime-500 px-10 py-4 w-fit h-fit border-b-6 border-b-lime-700 rounded-xl text-4xl text-white text-shadow-sm text-shadow-neutral-800/80 cursor-pointer hover:scale-102 hover:transform-all hover:duration-300 tracking-widest">
      {name}
    </button>
  );
};

export default Button;
