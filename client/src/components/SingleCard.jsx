import React from "react";
import styled from "styled-components";

const SingleCard = ({ description, tried }) => {
  return (
    <Wrapper>
      {description}
      <p>{tried}</p>
    </Wrapper>
  );
};

export default SingleCard;

const Wrapper = styled.div`
  border-top: 1px solid dashed;
`;
