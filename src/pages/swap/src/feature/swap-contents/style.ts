import styled, { css } from "styled-components";

export const PriceBox = styled.div``;

export const GasFeeField = styled.div<{ isOpen?: boolean }>`
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
  color: rgb(125, 125, 125);
  font-size: 14px;
`;

export const GasFeeBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const MoreBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  width: fit-content;
`;

export const ButtonBox = styled.div<{ isOpen?: boolean }>`
  transition: transform 0.1s linear;
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `};
`;
