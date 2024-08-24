import styled from "styled-components";

export const NetworkBox = styled.button`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 8px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  color: rgb(125, 125, 125);
  transition: 250ms;

  &:hover {
    background-color: rgb(245, 245, 245);
  }

  img {
    width: 20px;
    height: 20px;
    border-right: 6px;
  }
`;
