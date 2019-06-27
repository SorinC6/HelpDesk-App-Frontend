import React from "react";
import styled from "styled-components";

const Field = ({ name, backgroundColor, size }) => {
  return (
    <FieldWrapper backgroundColor={backgroundColor} size={size}>
      <p>{name}</p>
    </FieldWrapper>
  );
};

export default Field;

const FieldWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=DM+Sans&display=swap");
  height: 30%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.size};
  font-family: "DM Sans", sans-serif;
`;
