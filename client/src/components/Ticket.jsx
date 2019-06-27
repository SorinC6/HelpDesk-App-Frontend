import React from "react";
import styled from "styled-components";
import theme from "../theme/styledTheme";
import Field from "../utils/Field";
import Flip from "react-reveal/Flip";
import { Ring } from "react-awesome-spinners";

const Ticket = ({ loading, ticket }) => {
  const fromStatusToColor = status => {
    switch (status) {
      case "pending":
        return "red";
      case "helping":
        return "violet";
      case "fixed":
        return "green";
      default:
        return "white";
    }
  };

  return (
    <div>
      {loading ? (
        <Ring size="64" />
      ) : (
        <Flip bottom>
          <MainWrapper>
            <Field
              name={ticket.title}
              backgroundColor={`${theme.color.lightGreen}`}
              size="20px"
            />
            <Field
              name={`About: ${ticket.categories}`}
              backgroundColor={`${theme.color.secondaryPurple}`}
              size="18px"
            />
            <Field
              name={`From ${ticket.student}`}
              backgroundColor={`${theme.color.accentGreen}`}
            />
            <Field
              name={ticket.status}
              backgroundColor={fromStatusToColor(ticket.status)}
              size="27px"
            />
          </MainWrapper>
        </Flip>
      )}
    </div>
  );
};

export default Ticket;

const MainWrapper = styled.div`
  height: 300px;
  width: 300px;
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
