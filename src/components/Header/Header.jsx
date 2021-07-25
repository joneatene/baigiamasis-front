import React, { useEffect, useState } from "react";
import * as S from "./Header.style";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [changed, setChanged] = useState();

  useEffect(() => {
    history.listen((location) => {
      if (
        location.pathname === "/timeline" ||
        location.pathname === "/profile"
      ) {
        setChanged(true);
      } else if (location.pathname === "/" || location.pathname === "/login") {
        setChanged();
      }
    });
  }, [history]);

  const LogOut = () => {
    localStorage.removeItem("token");
    history.push("/login");
    setChanged();
  };
  if (!changed) {
    return (
      <header className="header">
        <S.NavBlock>
          <S.NavLink to="/">Register</S.NavLink>
          <S.NavLink to="login">Login</S.NavLink>
        </S.NavBlock>
      </header>
    );
  }

  return (
    <header>
      <S.NavBlock>
        <S.NavLink to="/timeline">Timeline</S.NavLink>
        <S.NavLink to="/profile">Profile</S.NavLink>
        <S.LogOut onClick={LogOut}>Log out</S.LogOut>
      </S.NavBlock>
    </header>
  );
};

export default Header;
