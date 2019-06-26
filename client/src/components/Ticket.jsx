import React from "react";
import styled from "styled-components";
import theme from "../theme/styledTheme";

const Ticket = () => {
  return (
    <MainWrapper>
      <TitleWrapper>
        <p />
      </TitleWrapper>
      <CategoryWrapper>
        <p />
      </CategoryWrapper>
      <UserWrapper>
        <p></p>
      </UserWrapper>
    </MainWrapper>
  );
};

export default Ticket;

const MainWrapper = styled.div`
  height: 400px;
  width: 400px;
  margin: 30px;
  border: 10px solid ${theme.color.secondaryPurple};
  border-radius: 50%;
  background: ${theme.color.accentPurple};
  opacity: 0.9;
  box-shadow: ${theme.shadow.cardShadow};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  height: 30%;
  background-color: red;
`;

const CategoryWrapper = styled.div`
  height: 30%;
  background-color: green;
`;

const UserWrapper = styled.div`
  height: 30%;
  background-color: green;
`;
