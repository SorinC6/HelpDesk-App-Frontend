import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const SingleCard = ({ description, tried }) => {
  return (
    <Wrapper>
      <Description>
        <h2>Problem Description</h2>
        <p>{description}</p>
      </Description>
      <Icon
        name="arrow alternate circle right"
        aria-label="FROM SORIN"
        size="massive"
        color="teal"
      />
      <Tried>
        <h2>What the student tried </h2>
        <p>{tried}</p>
      </Tried>
    </Wrapper>
  );
};

export default SingleCard;

const Wrapper = styled.div`
  border-top: 1px solid dashed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  height: 300px;
  width: 300px;
  background-color: darkolivegreen;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Tried = styled.div`
  height: 300px;
  width: 300px;
  background-color: darkmagenta;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
