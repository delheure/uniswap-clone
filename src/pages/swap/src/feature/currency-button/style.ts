import styled from "styled-components";

export const CurrencyButtonUnit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 40px;
  width: 40px;
  margin: -18px auto;
  background-color: var(--gray-background);
  border: 4px solid var(--default-background);
  border-radius: 12px;
  z-index: 2;

  &:hover {
    svg {
      opacity: 0.8;
    }
  }
`;
