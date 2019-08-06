import React from "react";
import styled, { keyframes } from "styled-components";
import { ModalHeader } from "semantic-ui-react";

const Modal = ({ show, toggle, type }) => {
  let modalFooter;
  let modalHeader;

  if (type === "addModal") {
    modalFooter = (
      <>
        <button>Add Ticket</button>
        <button onClick={toggle}>Cancel</button>
      </>
    );
    modalHeader = (
      <>
        <h1>Create ticket</h1>
      </>
    );
  }
  return (
    <>
      <Backdrop show={show} onClick={toggle} />
      <Container show={show}>
        <Header>{modalHeader}</Header>
        <p>Body here</p>
        <Footer>{modalFooter}</Footer>
      </Container>
    </>
  );
};

export default Modal;

const Backdrop = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const animatetop = keyframes`
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
`;

const Container = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: fixed;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: ${props => (props.width ? props.width : "40%")};
  @media screen and (max-width: 500px) {
    width: 96%;
  }
  border: none;
  box-shadow: 0 1px 1.5rem rgba(0, 0, 0, 0.1);
  -webkit-animation-name: ${animatetop};
  -webkit-animation-duration: 0.2s;
  animation-name: ${animatetop};
  animation-duration: 0.2s;
  z-index: 2000;
  border-radius: 10px;
  border-radius: 10px;
`;

export const Header = styled.div`
  padding: 1rem;
  background: #cc8800;
  color: darkred;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Footer = styled.div`
  padding: 1rem;
  background: #cc8800;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Button = styled.button`
  background: coral;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.6rem;
  transition: background-color 650ms;
`;

export const ContinueBtn = styled(Button)`
  background-color: darkred;
  margin-right: 0.8rem;
  font-size: 16px;
  outline: none;
  &:hover {
    background: white;
    color: darkred;
  }
`;
export const CancelBtn = styled(Button)`
  background-color: #b32d00;
  font-size: 16px;
  outline: none;
  &:hover {
    background: white;
    color: darkred;
  }
`;
