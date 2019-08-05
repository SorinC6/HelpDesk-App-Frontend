import React from "react";
import styled from "styled-components";
import theme from "../theme/styledTheme";
import RoundCard from "./RoundCard";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <HeaderWrap>
      <img src={logo} alt={logo} />
      <RoundCard name="Create" />
      <RoundCard name="Tickets" path="/" />
      <RoundCard name="User" />
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${theme.color.accentGreen};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }
`;
