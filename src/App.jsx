import React, { useEffect, useState } from "react";
import StartGame from "./components/StartGame/StartGame";
import DiffPage from "./components/Difficulties/DiffPage";
import Loader from "./components/ui/Loader";
import EasyDiff from "./components/Difficulties/EasyDiff";
import MediumDiff from "./components/Difficulties/MediumDiff";
import HardDiff from "./components/Difficulties/HardDiff";
HardDiff;

const App = () => {
  const [status, setStatus] = useState("loading");
  const [characters, setCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function fetchData() {
      const maxId = 826;
      const ids = new Set();

      while (ids.size < 14) {
        ids.add(Math.floor(Math.random() * maxId) + 1);
      }

      const idsArray = Array.from(ids);
      await delay(1000);

      fetch(`https://rickandmortyapi.com/api/character/${idsArray.join(",")}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data);
          setStatus("start");
          console.log(data);
        })
        .catch((error) => console.error("Fetch error: ", error));
    }

    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url(/background.gif)] bg-center bg-cover px-4 sm:px-8">
      {status === "loading" && <Loader />}
      {status === "start" && <StartGame setStatus={setStatus} />}
      {(status === "easy" || status === "medium" || status === "hard") && (
        <DiffPage>
          {status === "easy" && (
            <EasyDiff
              score={score}
              setScore={setScore}
              highScore={highScore}
              setHighScore={setHighScore}
              characters={characters}
              setCharacters={setCharacters}
            />
          )}
          {status === "medium" && (
            <MediumDiff
              score={score}
              setScore={setScore}
              highScore={highScore}
              setHighScore={setHighScore}
              characters={characters}
              setCharacters={setCharacters}
            />
          )}
          {status === "hard" && (
            <HardDiff
              score={score}
              setScore={setScore}
              highScore={highScore}
              setHighScore={setHighScore}
              characters={characters}
              setCharacters={setCharacters}
            />
          )}
        </DiffPage>
      )}
    </div>
  );
};

export default App;
