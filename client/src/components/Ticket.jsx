import React from "react";
import styled from "styled-components";
import theme from "../theme/styledTheme";
import Field from "../utils/Field";

const Ticket = () => {
  return (
    <MainWrapper>
      <Field name="Title" backgroundColor={`${theme.color.lightGreen}`} />
      <Field
        name="Category"
        backgroundColor={`${theme.color.secondaryPurple}`}
      />
      <Field name="User" backgroundColor={`${theme.color.accentGreen}`} />
      <Field name="Status" backgroundColor={`${theme.color.accentPurple}`} />
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
  cursor: pointer;
`;

// const TitleWrapper = styled.div`
//   height: 30%;
//   background-color: ${theme.color.lightGreen};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const CategoryWrapper = styled.div`
//   height: 30%;
//   background-color: ${theme.color.accentPurple};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const UserWrapper = styled.div`
//   height: 30%;
//   background-color: ${theme.color.accentGreen};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const StatusWrapper = styled.div`
//   height: 30%;
//   background-color: ${theme.color.lightPurple};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
