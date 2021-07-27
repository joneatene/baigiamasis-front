import React, { useEffect, useState, useContext } from "react";
import * as S from "./Header.style";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

const Header = () => {
  const history = useHistory();
  const userContext = useContext(UserContext);
  const [changed, setChanged] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/timeline" || location.pathname === "/profile") {
      setChanged(true);
    } else if (location.pathname === "/" || location.pathname === "/login") {
      setChanged(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    history.listen((location) => {
      if (
        location.pathname === "/timeline" ||
        location.pathname === "/profile"
      ) {
        setChanged(true);
      } else if (location.pathname === "/" || location.pathname === "/login") {
        setChanged(false);
      }
    });
  }, [history]);

  const LogOut = () => {
    localStorage.removeItem("token");
    history.push("/login");
    userContext.setUser();
    setChanged();
  };
  if (changed === false) {
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
