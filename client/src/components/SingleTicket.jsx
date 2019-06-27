import React from "react";
import Header from "./Header";
import styled from "styled-components";

const SingleTicket = ({ tickets, match }) => {
  const currentId = parseInt(match.params.id);
  const currentTicket =
    tickets &&
    tickets.filter(ticket => {
      return ticket.id === currentId;
    });

  debugger;
  return (
    <div>
      <Header />
      <CardView>
        {currentTicket.map(tic => {
          return <SingleCard />;
        })}
      </CardView>
    </div>
  );
};

export default SingleTicket;

const CardView = styled.div``;

const Description = styled.div``;
