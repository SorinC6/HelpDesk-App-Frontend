import React, { useEffect } from "react";
import Header from "./Header";
import TicketList from "./TicketList";
import Filter from "./FIlter";
import { connect } from "react-redux";
import { getAllTickets } from "../store/actions/ticketAction";
import { toggleModle } from "../store/actions/modleAction";
import CreateTicket from "./TestTicketIdeea/CreateTicket";

const Home = ({
  getAllTickets,
  loading,
  tickets,
  filteredTickets,
  toggleModle,
  showAddModal
}) => {
  useEffect(() => {
    getAllTickets();
  }, []);
  return (
    <div>
      <Header toggleModle={toggleModle} />
      <Filter tickets={tickets} />
      <TicketList
        loading={loading}
        tickets={tickets}
        filteredTickets={filteredTickets}
      />
      <CreateTicket />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.ticketReducer.tickets,
    loading: state.ticketReducer.loading,
    filteredTickets: state.ticketReducer.filteredTickets,
    showAddModle: state.modalReducer.showAddModle
  };
};

const mapDispatchToProps = {
  getAllTickets,
  toggleModle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
