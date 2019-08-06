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
  const showAllTickets = () => {
    props.getAllTickets();
  };
  const showHelpingTickets = () => {
    props.getHelpingTickets();
  };
  const showPendingTickets = () => {
    props.getPendingTickets();
  };
  const showFixedTickets = () => {
    props.getFixedTickets();
  };

  return (
    <Root>
      <TicketFilter>
        <button onClick={showAllTickets}>All Tickets</button>
        <button onClick={showPendingTickets}>Pending</button>
        <button onClick={showHelpingTickets}>Helping</button>
        <button onClick={showFixedTickets}>Fixed</button>
      </TicketFilter>

      <UserFilter>
        <button>All Users</button>
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
