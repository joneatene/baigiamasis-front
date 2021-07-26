import styled from "styled-components";

export const CardBlock = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  margin-bottom: 2rem;
  transition: ease-in-out 0.2s;
  position: relative;
  &:hover {
    background: rgb(247, 245, 237);
  }
`;

export const InfoBlock = styled.div`
  margin-bottom: 1rem;
`;

export const Username = styled.h5`
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.4rem;
`;

export const Timestamp = styled.p`
  font-style: italic;
  font-size: 0.8rem;
  margin: 0;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  font-weight: 200;
  font-size: 1.2em;
  position: absolute;
  outline: none;
  background: transparent;
  border: none;
  right: 7px;
  top: 2px;
`;
