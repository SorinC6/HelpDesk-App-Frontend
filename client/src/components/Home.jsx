import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import { connect } from "react-redux";
import { getAllTickets } from "../store/actions/ticketAction";

const Home = ({ getAllTickets }) => {
  return (
    <div>
      <Header />
      //filter component
      <TicketList getAllTickets={getAllTickets} />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  getAllTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
