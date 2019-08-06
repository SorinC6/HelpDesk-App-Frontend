import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getAllTickets,
  getHelpingTickets,
  getPendingTickets,
  getFixedTickets
} from "../store/actions/ticketAction";

const Filter = props => {
  return (
    <Root>
      <TicketFilter>
        <button onClick={props.getAllTickets}>All Tickets</button>
        <button onClick={props.getPendingTickets}>Pending</button>
        <button onClick={props.getHelpingTickets}>Helping</button>
        <button onClick={props.getFixedTickets}>Fixed</button>
      </TicketFilter>

      <UserFilter>
        <button onClick={props.getAllTickets}>All Users</button>
        <button>My Ticket</button>
        <button>Helping Tickets</button>
      </UserFilter>
    </Root>
  );
};

const mapDIspatchToProps = {
  getAllTickets,
  getHelpingTickets,
  getFixedTickets,
  getPendingTickets
};

export default connect(
  null,
  mapDIspatchToProps
)(Filter);

const TicketFilter = styled.div`
  padding: 20px;
`;

const UserFilter = styled.div`
  padding: 20px;
`;

const Root = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin: 5px;
    padding: 10px;
    border-radius: 100%;
    outline: none;
  }
`;
