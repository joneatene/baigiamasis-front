import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBlock = styled.nav`
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  color: rgb(48, 59, 76);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  transition: ease-in-out 0.2s;
  margin-right: 2rem;

  &:hover {
    color: rgb(152, 156, 165);
  }
`;

export const LogOut = styled.a`
  text-decoration: none;
  color: rgb(176, 181, 191);
  font-size: 1rem;
  cursor: pointer;

  @media only screen and (max-width: 900px) {
    font-size: 0.8rem;
  }
`;
