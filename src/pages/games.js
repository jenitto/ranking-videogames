import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCard from "../components/game-card";
import { getGamesByPlatforms } from "../services/rawg-service";

export default function Games() {
  let { id } = useParams();

  const [games, setGames] = useState([]);

  useEffect(() => {
    getGamesByPlatforms(id, { ordering: "metacritic-released" })
      .then((res) => {
        console.log("axios RAWL: ", res.data);
        console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((error) => {
        console.log("Error!", error);
      });
    // getRawgGamesFetch()
    //   .then((response) => response.json())
    //   .then((data) => console.log("fetch RAWL:", data))
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // getGamesDBGamesAxios()
    //   .then((res) => {
    //     console.log("axios thegamesdb", res.data);
    //   })
    //   .catch((error) => {
    //     console.log("Error!", error);
    //   });
    // getGamesDBGamesFetch()
    //   .then((response) => response.json())
    //   .then((data) => console.log("fetch thegamesdb", data))
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [id]);

  return (
    <>
      {games.map((game) => (
        <GameCard
          key={game.id}
          image={game.background_image}
          title={game.name}
        ></GameCard>
      ))}
    </>
  );
}
