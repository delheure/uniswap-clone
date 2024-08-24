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
  color: var(--text-gray);
  transition: 250ms;

  &:hover {
    background-color: var(--hover-gray);
  }

  img {
    width: 20px;
    height: 20px;
    border-right: 6px;
  }
`;
