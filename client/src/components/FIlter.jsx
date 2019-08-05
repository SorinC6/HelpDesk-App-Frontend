import React from "react";
import styled from "styled-components";

const Filter = ({ tickets }) => {
  return (
    <div>
      <TicketFilter>
        <button>All Tickets</button>
        <button>Pending</button>
        <button>Helping</button>
        <button>Fixed</button>
      </TicketFilter>

      <UserFilter>
        <button>All Users</button>
        <button>My Ticket</button>
        <button>Helping Tickets</button>
      </UserFilter>
    </div>
  );
};

export default Filter;

const TicketFilter = styled.div`
  padding: 20px;
`;

const UserFilter = styled.div`
  padding: 20px;
`;
