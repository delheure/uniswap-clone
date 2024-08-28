import styled, { css } from "styled-components";

export const SwapContentsWrapper = styled.div``;

export const PriceBox = styled.div``;

export const GasFeeField = styled.div<{ isOpen?: boolean }>`
  display: flex;
  justify-content: flex-end;
  color: var(--text-gray);
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
  cursor: pointer;

  svg {
    transition: transform 0.1s linear;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `};
`;

export const InfoField = styled.div`
  padding: 12px 16px;
  font-size: 14px;
`;

export const InfoTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TradePriceBox = styled.div`
  cursor: pointer;
`;

export const CurrencyUnit = styled.span`
  color: var(--text-gray);
`;
