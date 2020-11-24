import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LazyImage from "../../lazy-image/lazyImage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    borderRadius: "4px",
  },
}));

const CardGameHorizontal = ({ title, subtitle, bgPhoto }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.cover}>
        <LazyImage src={bgPhoto} alt={`Img of ${title}`} />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {subtitle}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

CardGameHorizontal.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgPhoto: PropTypes.string,
};

export default CardGameHorizontal;
