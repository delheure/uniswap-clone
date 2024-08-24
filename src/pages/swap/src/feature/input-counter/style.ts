import styled, { css } from "styled-components";
import { ellipsis } from "~/styles/mixin";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  min-height: 120px;
  background-color: rgb(249, 249, 249);
  border-radius: 16px;
  color: rgb(125, 125, 125);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const TitleUnit = styled.span`
  font-size: 14px;
  color: var(--gray-text);
  text-transform: capitalize;
`;

export const TokensBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 12px;
`;

export const AmountUnit = styled.input`
  flex: 1 1 auto;
  width: auto;
  max-width: 70%;
  max-height: 44px;
  background: transparent;
  border: 0;
  font-size: 36px;
  color: rgb(34, 34, 34);
  outline: 0;
  transition: opacity 250ms ease-in-out;
  ${ellipsis};

  &::placeholder {
    color: #cecece;
  }
`;

export const SelectedTokenBox = styled.button<{ isSelected?: boolean }>`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  width: fit-content;
  padding: 4px 8px 4px 4px;
  margin-left: 12px;
  height: 36px;
  box-shadow: rgba(34, 34, 34, 0.04) 0px 0px 10px 0px;
  color: rgb(34, 34, 34);

  border: 1px solid rgba(34, 34, 34, 0.07);
  border-radius: 18px;
  background-color: var(--default-background);
  white-space: nowrap;
  outline: none;
  cursor: pointer;

  span {
    margin: 0 4px;
    font-size: 20px;
    font-weight: 535;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      padding: 6px 6px 6px 8px;

      color: #ffffff;
      background-color: rgb(252, 114, 255);
      border-color: rgb(252, 114, 255);
    `};

  img {
    width: 24px;
    height: 24px;
  }
`;

export const CurrencyUnit = styled.span`
  margin: 4px 0 0 0;
  color: rgb(125, 125, 125);
  font-size: 14px;
`;
