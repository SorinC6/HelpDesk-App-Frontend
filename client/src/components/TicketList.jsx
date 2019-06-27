import React, { useEffect } from "react";
import Ticket from "./Ticket";
import styled from "styled-components";

const TicketList = ({ loading, tickets }) => {
  //
  return (
    <TicketsWrapper>
      {tickets &&
        tickets.map(ticket => <Ticket ticket={ticket} loading={loading} />)}
    </TicketsWrapper>
  );
};

export default TicketList;

const TicketsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
