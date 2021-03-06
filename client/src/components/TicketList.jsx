import React, { useEffect } from "react";
import Ticket from "./Ticket";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TicketList = ({ loading, tickets, filteredTickets }) => {
  return (
    <TicketsWrapper>
      {filteredTickets
        ? filteredTickets &&
          filteredTickets.map(ticket => {
            return (
              <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
                <Ticket ticket={ticket} loading={loading} />
              </Link>
            );
          })
        : tickets &&
          tickets.map(ticket => {
            return (
              <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
                <Ticket ticket={ticket} loading={loading} />
              </Link>
            );
          })}
    </TicketsWrapper>
  );
};

export default TicketList;

const TicketsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
