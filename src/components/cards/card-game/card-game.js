import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarRating from "../../../helpers/star-rating";

const Container = styled.div`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  background-position: center center;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Content = styled.div`
  width: 100%;
  border-radius: 8px;
  position: relative;
  top: 50px;
  color: white;
  background-color: white;
  padding: 20px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 800;
  color: ${(props) => props.color};
`;

const Subtitle = styled.span`
  margin-top: 8px;
  font-size: 14px;
  display: block;
  color: ${(props) => props.color};
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
`;

const Btn = styled.span`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  cursor: pointer;
`;

const ReviewsContainer = styled.div`
  margin-bottom: 15px;
  font-size: 10px;
  color: #9ca1ae;
`;

const CardGame = ({
  title,
  subtitle,
  titleColor = "#1F2126",
  subtitleColor = "#9CA1AE",
  bgPhoto,
  secondSubtitle,
  btnColor = "white",
  ratingAverage,
  metacritic,
  totalReviews,
}) => (
  <Container bgPhoto={bgPhoto}>
    <Top>
      <Btn color={btnColor}>
        <FavoriteBorderIcon />
      </Btn>
    </Top>

    {(title || subtitle) && (
      <Content>
        <ReviewsContainer>
          <StarRating rating={ratingAverage} />
          {totalReviews && (
            <span>
              {`${totalReviews === 1 ? "1 review" : `${totalReviews} reviews`}`}
            </span>
          )}
          <div>
            <span>Rating: {ratingAverage}</span>
            {metacritic && <span> / Metacritic: {metacritic}</span>}
          </div>
        </ReviewsContainer>
        {title && <Title color={titleColor}>{title}</Title>}
        {subtitle && <Subtitle color={subtitleColor}>{subtitle}</Subtitle>}
        {secondSubtitle && (
          <Subtitle color={subtitleColor}>{secondSubtitle}</Subtitle>
        )}
      </Content>
    )}
  </Container>
);

CardGame.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgPhoto: PropTypes.string,
  btnBg: PropTypes.string,
  btnColor: PropTypes.string,
  secondTitle: PropTypes.string,
  secondSubtitle: PropTypes.string,
  ratingAverage: PropTypes.number,
  metacritic: PropTypes.number,
  totalReviews: PropTypes.number,
};

export default CardGame;
