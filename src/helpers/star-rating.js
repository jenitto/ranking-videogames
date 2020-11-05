import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

const StarRating = ({ rating }) => {
  const roundedRating = Math.ceil(rating * 2) / 2; // 5.5

  const EmptyStar = () => (
    <StarBorderIcon style={{ fontSize: 10 }} color="primary" />
  );

  const FullStar = () => <StarIcon style={{ fontSize: 10 }} color="primary" />;

  const HalfStar = () => (
    <StarHalfIcon style={{ fontSize: 10 }} color="primary" />
  );

  if (roundedRating === 0.5) {
    return <HalfStar />;
  } else if (roundedRating === 1) {
    return <FullStar />;
  } else if (roundedRating === 1.5) {
    return (
      <>
        <FullStar />
        <HalfStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </>
    );
  } else if (roundedRating === 2) {
    return (
      <>
        <FullStar />
        <FullStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </>
    );
  } else if (roundedRating === 2.5) {
    return (
      <>
        <FullStar />
        <FullStar />
        <HalfStar />
        <EmptyStar />
        <EmptyStar />
      </>
    );
  } else if (roundedRating === 3) {
    return (
      <>
        <FullStar />
        <FullStar />
        <FullStar />
        <EmptyStar />
        <EmptyStar />
      </>
    );
  } else if (roundedRating === 3.5) {
    return (
      <>
        <FullStar />
        <FullStar />
        <FullStar />
        <HalfStar />
        <EmptyStar />
      </>
    );
  } else if (roundedRating === 4) {
    return (
      <>
        <FullStar />
        <FullStar />
        <FullStar />
        <FullStar />
        <EmptyStar />
      </>
    );
  } else if (roundedRating === 4.5) {
    return (
      <>
        <FullStar />
        <FullStar />
        <FullStar />
        <FullStar />
        <HalfStar />
      </>
    );
  } else if (roundedRating === 5) {
    return (
      <>
        <FullStar />
        <FullStar />
        <FullStar />
        <FullStar />
        <FullStar />
      </>
    );
  } else {
    return "";
  }
};

export default StarRating;
