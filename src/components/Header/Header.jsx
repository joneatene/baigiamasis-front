import React from "react";
import * as S from "./Header.style";

const Header = () => (
  <header>
    <S.NavBlock>
      <S.NavLink to="/">Register</S.NavLink>
      <S.NavLink to="/login">Login</S.NavLink>
      <S.NavLink to="/profile">Profile</S.NavLink>
    </S.NavBlock>
  </header>
);

export default Header;
