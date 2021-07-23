import styled from "styled-components";

export const CardBlock = styled.div`
  width: 30rem;
  box-sizing: border-box;
  padding: 1rem;
  margin-bottom: 2rem;
  transition: ease-in-out 0.2s;
  &:hover {
    background: rgb(247, 245, 237);
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: top;
  margin-bottom: 1rem;
`;

export const CardImage = styled.img`
  height: 3rem;
  width: 3rem;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const Username = styled.h5`
  font-weight: 400;
  text-transform: uppercase;
  margin: 0.2rem 0;
`;

export const Timestamp = styled.p`
  font-style: italic;
  font-size: 0.8rem;
  margin: 0;
`;
