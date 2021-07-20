import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgb(217, 212, 208);
  background: transparent;
  outline: none;
  width: 100%;
  padding: 1rem 0.5rem;
  margin-bottom: 2rem;
  transition: ease-in-out 0.2s;

  &:focus {
    background: rgb(247, 245, 237);
  }
`;
