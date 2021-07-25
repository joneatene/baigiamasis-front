import styled from "styled-components";

export const NotificationBlock = styled.div`
  padding: 1rem;
  border-radius: 10px;
  background: ${(props) =>
    props.type === "success" ? "rgb(173,210,174)" : "rgb(188,56,33)"};
  color: rgb(250, 250, 250);
  margin: 1rem 0;
`;
