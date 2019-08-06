import React, { useState } from "react";
import Modal from "./Modal";

const CreateTicket = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1>Create a ticket</h1>
      <Modal show={showModal} toggle={toggleModal} type="addModal" />
      <button onClick={toggleModal}>ShowModal</button>
    </div>
  );
};

export default CreateTicket;
