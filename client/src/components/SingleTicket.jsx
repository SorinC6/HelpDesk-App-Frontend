import React from "react";
import Header from "./Header";

const SingleTicket = props => {
  debugger;
  const currentId = props.match.params.id;

  return (
    <div>
      <Header />
      <div>single Ticket</div>;
    </div>
  );
};

export default SingleTicket;
