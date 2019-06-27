import React, { useEffect } from "react";
import Ticket from "./Ticket";
import styled from "styled-components";

const TicketList = ({ getAllTickets }) => {
  useEffect(() => {
    getAllTickets();
  }, []);
  return (
    <TicketsWrapper>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </TicketsWrapper>
  );
};

export default TicketList;

const TicketsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
