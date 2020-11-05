import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardGame from "../components/cards/card-game/card-game";
import { getGamesByPlatforms } from "../services/rawg-service";

export default function Games() {
  let { id } = useParams();

  const [games, setGames] = useState([]);

  useEffect(() => {
    getGamesByPlatforms(id, { ordering: "metacritic-released" })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((error) => {
        // console.log("Error!", error);
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
              subtitle={game.released.substring(0, 4)}
              iconName="fas fa-heart"
              btnIcon="fas fa-arrow-right"
              bgPhoto={game.background_image}
              secondSubtitle={game.genres.map((genre) => genre.name).join(", ")}
              totalReviews={game.ratings_count}
              ratingAverage={game.rating}
              metacritic={game.metacritic}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
