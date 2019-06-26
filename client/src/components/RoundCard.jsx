import React from "react";
import styled from "styled-components";
import theme from "../theme/styledTheme";

const RoundCard = () => {
  return (
    <Card>
      <p />
    </Card>
  );
};

export default RoundCard;

const Card = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${theme.accentPurple};
`;
