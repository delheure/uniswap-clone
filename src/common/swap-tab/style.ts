import styled, { css } from "styled-components";

export const TabBox = styled.div`
  display: flex;
  margin: 0 0 8px 0;
`;

export const TabUnit = styled.button<{ active?: boolean }>`
  gap: 4px;
  padding: 8px 12px;
  border-radius: 20px;
  color: rgb(125, 125, 125);
  font-size: 16px;
  font-weight: 485;
  text-transform: capitalize;
  transition-duration: 125ms;
  transition-timing-function: ease-in-out;
  transition-property: opacity, color, background-color;

  ${({ active }) =>
    active &&
    css`
      color: rgb(34, 34, 34);
      background-color: rgba(34, 34, 34, 0.07);
    `};
}
`;
