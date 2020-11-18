import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background: url(${(props) => props.bgPhoto}), ${(props) => props.bgColor};
  background-position: center top;
  background-size: cover;
  border-radius: 8px 8px 10px 10px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: flex-end;
  height: 300px;
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

const TagContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  background-color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 3px;
  text-align: center;
  color: #444;
  height: 32px;
  width: 32px;
  line-height: 32px;
  border: 1px solid #444;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.07);
`;

const TagText = styled.span``;

const IconContainer = styled.div`
  color: ${(props) => props.iconColor};
`;

const CardGame = ({
  title,
  subtitle,
  tag,
  tagBg = "#368BE3",
  tagColor = "white",
  iconName,
  iconSize = 2,
  bgPhoto,
  bgColor = "#DBE0E6",
  iconColor = "rgba(67, 72, 77, 0.2)",
}) => (
  <Container bgPhoto={bgPhoto} bgColor={bgColor}>
    {tag && (
      <TagContainer tagBg={tagBg} tagColor={tagColor}>
        <TagText>{tag}</TagText>
      </TagContainer>
    )}
    {(title || subtitle) && (
      <Content>
        <ContentColumn>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </ContentColumn>
        {iconName && (
          <IconContainer iconColor={iconColor}>
            <i className={`${iconName} fa-${iconSize}x`} />
          </IconContainer>
        )}
      </Content>
    )}
  </Container>
);

CardGame.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tag: PropTypes.string,
  tagBg: PropTypes.string,
  tagColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  bgPhoto: PropTypes.string,
  bgColor: PropTypes.string,
  iconColor: PropTypes.string,
};

export default CardGame;
