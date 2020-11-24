import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Skeleton from "@material-ui/lab/Skeleton";
import LazyImage from "../../lazy-image/lazyImage";

const Container = styled.div`
  position: relative;
  border-radius: 8px 8px 10px 10px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: flex-end;
  height: 300px;
`;

const Cover = styled.div`
  height: 224px;
  width: 100%;
  position: absolute;
  top: 0;
`;

const Content = styled.div`
  border-radius: 0px 0px 8px 8px;
  background-color: white;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentColumn = styled.div``;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
`;

const Subtitle = styled.span`
  font-size: 14px;
`;

const CardGame = ({ title, subtitle, bgPhoto, skeleton = false }) => (
  <Container>
    <Cover>
      {skeleton ? (
        <Skeleton animation="wave" variant="rect" height={224} />
      ) : (
        <LazyImage src={bgPhoto} alt={`Img of ${title}`} />
      )}
    </Cover>
    <Content>
      <ContentColumn>
        <Title>
          {skeleton ? (
            <Skeleton
              animation="wave"
              variant="rect"
              height={10}
              width={200}
              style={{ marginBottom: 6 }}
            />
          ) : (
            title
          )}
        </Title>
        {skeleton ? (
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        ) : (
          subtitle && <Subtitle>{subtitle}</Subtitle>
        )}
      </ContentColumn>
    </Content>
  </Container>
);

CardGame.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgPhoto: PropTypes.string,
  iconColor: PropTypes.string,
  skeleton: PropTypes.bool,
};

export default CardGame;
