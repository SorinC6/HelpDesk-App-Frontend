import React from "react";
import styled from "styled-components";
import theme from "../theme/styledTheme";

const Ticket = () => {
  return <MainWrapper>Ticket</MainWrapper>;
};

export default Ticket;

const MainWrapper = styled.div`
  height: 500px;
  width: 500px;
  border: 10px solid ${theme.color.secondaryPurple};
  border-radius: 50%;
  background: ${theme.color.accentPurple};
  opacity: 0.9;
  box-shadow: ${theme.shadow.cardShadow};
`;
