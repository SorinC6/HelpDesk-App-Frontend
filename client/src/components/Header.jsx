import React from "react";
import styled from "styled-components";
import theme from "../theme/styledTheme";


const Header = () => {
  return (
    <HeaderWrap>
      <p />
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${theme.color.accentGreen};
`;
