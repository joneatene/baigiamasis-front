import styled from "styled-components";

export const UserForm = styled.section`
  margin: 1rem auto;
  width: 30rem;
  box-sizing: border-box;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  padding: 1rem;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: top;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

// export const Photo = styled.img`
//   height: 3rem;
//   width: 3rem;
//   object-fit: cover;
//   border-radius: 50%;
//   margin-right: 1rem;
// `;

export const Name = styled.h5`
  font-weight: 400;
  margin: 0;
`;

export const Input = styled.textarea`
  box-sizing: border-box;
  border: none;
  color: rgb(116, 123, 133);
  background: transparent;
  outline: none;
  resize: none;
  height: 1rem;
  width: 100%;
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
  transition: ease-in-out 0.4s;

  &:focus {
    background: rgb(247, 245, 237);
    height: 5rem;
  }
`;
