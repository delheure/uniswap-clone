import styled from "styled-components";
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
  gap: 12px;
`;

export const AmountUnit = styled.input`
  flex: 1 1 auto;
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

export const SelectedTokenUnit = styled.button`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  width: initial;
  padding: 4px 8px 4px 4px;
  margin-left: 12px;
  height: 36px;
  box-shadow: rgba(34, 34, 34, 0.04) 0px 0px 10px 0px;
  color: rgb(34, 34, 34);
  font-size: 24px;
  font-weight: 485;
  border: 1px solid rgba(34, 34, 34, 0.07);
  border-radius: 18px;
  background-color: var(--default-background);
  outline: none;
  cursor: pointer;

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
