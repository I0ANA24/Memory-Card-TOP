import React from "react";

const Card = ({ character }) => {
  return (
    <div
      className="w-40 h-60 lg:w-50 lg:h-75 p-3 bg-gray-700 bg-[url(/card_bg.jpg)] bg-cover bg-bottom bg-blend-multiply rounded-xl flex flex-col items-center justify-between cursor-pointer"
      onClick={() => console.log("ok")}
    >
      <img
        src={character.image}
        alt="Character Image"
        className="w-full h-[70%] rounded-xl"
      />
      <div className="w-full h-[30%] pt-3 flex justify-center items-center">
        <p className="w-full text-center text-white text-xl lg:text-2xl leading-tight">
          {character.name}
        </p>
      </div>
    </div>
  );
};

export default Card;
