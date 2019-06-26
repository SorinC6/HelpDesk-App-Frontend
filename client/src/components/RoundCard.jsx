import React from "react";
import styled from "styled-components";
import theme from "../theme/styledTheme";

const RoundCard = ({ name }) => {
  return (
    <Card>
      <h3>{name}</h3>
    </Card> //https://codepen.io/team/css-tricks/pen/EjaJNd
  );
};

export default RoundCard;

const Card = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${theme.color.accentPurple};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s all;
  &:hover {
    transform: scale(1.15);
    color: ${theme.color.accentGreen};
    cursor: pointer;
  }
`;
