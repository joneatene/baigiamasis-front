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
