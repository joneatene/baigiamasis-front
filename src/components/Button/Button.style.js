import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 25px;
  background: ${(props) =>
    props.color === "primary" ? "rgb(40,48,64)" : "rgb(176,181,191)"};
  color: white;
  cursor: pointer;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
`;
