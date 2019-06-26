import React from "react";
import Header from "./Header";
import TicketList from "./Ticket";

const Home = () => {
  return (
    <div>
      <Header />
      //filter component
      <TicketList />
    </div>
  );
};

export default Home;
