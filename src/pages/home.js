import React, { useEffect, useState } from "react";
import { getPlatforms } from "../services/rawg-service";
import GameCard from "../components/game-card";

export default function Home() {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    getPlatforms({ ordering: "name" })
      .then((res) => {
        setPlatforms(res.data.results);
      })
      .catch((error) => {
        console.log("Error!", error);
      });
  }, []);

  return (
    <>
      {platforms.map((platform) => (
        <GameCard
          key={platform.id}
          image={platform.image_background}
          title={platform.name}
        ></GameCard>
      ))}
    </>
  );
}
