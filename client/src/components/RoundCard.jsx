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
  animation-name: stretch;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: none;
  animation-play-state: running;

  @keyframes stretch {
    0% {
      transform: scale(0.9);
      background-color: red;
      border-radius: 100%;
    }
    50% {
      background-color: orange;
    }
    100% {
      transform: scale(1.2);
      background-color: yellow;
    }
  }
  &:hover {
    transform: scale(1.15);
    color: ${theme.color.accentGreen};
    cursor: pointer;
  }
`;
