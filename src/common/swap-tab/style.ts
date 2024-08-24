import styled, { css } from "styled-components";
import { transition } from "~/styles/mixin";

export const TabBox = styled.div`
  display: flex;
  margin: 0 0 8px 0;
`;

export const TabUnit = styled.button<{ active?: boolean }>`
  gap: 4px;
  padding: 8px 12px;
  border-radius: 20px;
  color: var(--text-gray);
  font-size: 16px;
  font-weight: 485;
  text-transform: capitalize;
  ${transition};

  &:hover {
    opacity: 0.6;
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--default-text);
      background-color: rgba(34, 34, 34, 0.07);
    `};
}
`;
