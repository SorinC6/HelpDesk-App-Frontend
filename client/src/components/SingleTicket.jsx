import React, { useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";
import SingleCard from "./SingleCard";
import { connect } from "react-redux";
import { getAllTickets } from "../store/actions/ticketAction";

const SingleTicket = ({ tickets, match, getAllTickets }) => {
  useEffect(() => {
    getAllTickets();
  }, []);

  const currentId = parseInt(match.params.id);
  const currentTicket =
    tickets &&
    tickets.filter(ticket => {
      return ticket.id === currentId;
    });
  return (
    <div>
      <Header />
      <CardView>
        {currentTicket &&
          currentTicket.map(tic => {
            return (
              <div key={tic.id}>
                <SingleCard description={tic.description} tried={tic.tried} />
              </div>
            );
          })}
      </CardView>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tickets: state.ticketReducer.tickets
  };
};

const mapDispatchToProps = {
  getAllTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleTicket);

const CardView = styled.div``;


