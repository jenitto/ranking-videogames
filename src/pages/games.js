import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardGame from "../components/cards/card-game/card-game";
import { getGamesByPlatforms } from "../services/rawg-service";
import { useGlobalLoading } from "../core/providers/GlobalLoaderProvider";

export default function Games() {
  let { id } = useParams();
  const { setIsLoading } = useGlobalLoading();

  const [games, setGames] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getGamesByPlatforms(id, {
      ordering: "-metacritic",
    })
      .then((res) => {
        setIsLoading(false);
        setGames(res.data.results);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("Error!", error);
      });
  }, [id]);

  return (
    <>
      <Grid container spacing={3}>
        {games.map((game) => (
          <Grid item sm={12} md={6} lg={4} xl={2}>
            <CardGame
              key={game.id}
              title={game.name}
              subtitle={game.released?.substring(0, 4) || ""}
              bgPhoto={game.background_image}
              tag={
                game.metacritic ||
                Math.round((game.rating * 100) / game.rating_top)
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
