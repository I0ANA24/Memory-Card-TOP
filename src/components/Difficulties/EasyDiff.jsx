import React from "react";
import Card from "../ui/Card";

const EasyDiff = ({
  score,
  setScore,
  highScore,
  setHighScore,
  characters,
  setCharacters,
}) => {
  return (
    <>
      {characters.slice(0, 6).map((character, index) => (
        <Card character={character} key={index} />
      ))}
    </>
  );
};

export default EasyDiff;
