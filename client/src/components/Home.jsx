import React, { useEffect } from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import { connect } from "react-redux";
import { getAllTickets } from "../store/actions/ticketAction";
import { ticketReducer } from "../store/reducers/ticketReducer";

const Home = ({ getAllTickets, loading, tickets }) => {
  useEffect(() => {
    getAllTickets();
  }, []);
  return (
    <div>
      <Header />
      //filter component
      <TicketList loading={loading} tickets={tickets} />
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.ticketReducer.tickets,
    loading: state.ticketReducer.loading
  };
};

const mapDispatchToProps = {
  getAllTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
