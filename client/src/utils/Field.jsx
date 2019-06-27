import React from "react";
import styled from "styled-components";

const Field = ({ name, backgroundColor }) => {
  return (
    <FieldWrapper backgroundColor={backgroundColor}>
      <p>{name}</p>
    </FieldWrapper>
  );
};

export default Field;

const FieldWrapper = styled.div`
  height: 30%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
