import React, { useEffect, useState } from "react";
import CardGame from "../components/cards/card-game/card-game";
import App from "../components/cards/karakoy/App";
import { getPlatforms } from "../services/rawg-service";
import ButtonParallax from "../components/buttons/button-parallax";

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
      <ButtonParallax />
      <App />
      {platforms.map((platform) => (
        <CardGame
          key={platform.id}
          title={platform.name}
          subtitle="Burano, Venice, Italy"
          iconName="fas fa-heart"
          btnIcon="fas fa-arrow-right"
          bgPhoto={platform.image_background}
          secondTitle="$250 per night"
          totalReviews={30}
          ratingAverage={4.5}
        />
      ))}
    </>
  );
}
