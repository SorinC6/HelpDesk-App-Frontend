import React, { useState } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { toggleModle } from "../../store/actions/modleAction";

const CreateTicket = ({ showModal, toggleModle }) => {
  //   const [showModal, setShowModal] = useState(false);

  //   const toggleModal = () => {
  //     setShowModal(!showModal);
  //   };
  console.log(showModal);
  return (
    <div>
      <h1>Create a ticket</h1>
      <Modal show={showModal} toggle={toggleModle} type="addModal">
        <form>
          <input placeholder="title" />
          <input placeholder="description" />
          <input placeholder="what I've tried" />
          <input placeholder="category" />
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showModal: state.modalReducer.showAddModal
  };
};

export default connect(
  mapStateToProps,
  { toggleModle }
)(CreateTicket);
