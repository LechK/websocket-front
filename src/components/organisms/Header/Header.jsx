import React from "react";
import * as S from "./Header.style";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { Navigation } from "../../../components";

function Header() {
  return (
    <S.Header>
      <S.Wrapper>
        <Link to="/">
          <S.Logo src={logo} alt="logo" />
        </Link>
        <Navigation navDirection="row" color="dark" />
      </S.Wrapper>
    </S.Header>
  );
}

export default Header;
