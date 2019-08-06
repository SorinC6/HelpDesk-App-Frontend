import React, { useEffect } from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import Filter from "./FIlter";
import { connect } from "react-redux";
import { getAllTickets } from "../store/actions/ticketAction";

const Home = ({ getAllTickets, loading, tickets, filteredTickets }) => {
  useEffect(() => {
    getAllTickets();
  }, []);
  return (
    <div>
      <Header />
      <Filter tickets={tickets} />
      <TicketList
        loading={loading}
        tickets={tickets}
        filteredTickets={filteredTickets}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.ticketReducer.tickets,
    loading: state.ticketReducer.loading,
    filteredTickets: state.ticketReducer.filteredTickets
  };
};

const mapDispatchToProps = {
  getAllTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
