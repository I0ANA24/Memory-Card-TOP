import React, { useEffect, useState } from "react";
import StartGame from "./components/StartGame/StartGame";
import DiffPage from "./components/Difficulties/DiffPage";
import Loader from "./components/ui/Loader";

const App = () => {
  const [status, setStatus] = useState("loading");
  const [characters, setCharacters] = useState([]);

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
    <div className="w-screen h-screen flex justify-center items-center bg-[url(/background.gif)] bg-center bg-cover p-4 sm:p-10">
      {status === "loading" && <Loader />}
      {status === "start" && <StartGame setStatus={setStatus} />}
      {(status === "easy" || status === "medium" || status === "hard") && <DiffPage difficulty={status} />}
    </div>
  );
};

export default App;
