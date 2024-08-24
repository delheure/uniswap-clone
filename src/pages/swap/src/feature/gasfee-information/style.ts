import styled, { css } from "styled-components";

export const GasfeeInformationWrapper = styled.ul<{ isOpen?: boolean }>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0 0 0;
  height: 0;
  transition: height 0.2s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      height: 161px;
    `};
`;

export const InfoDetailBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleUnit = styled.div`
  color: var(--text-gray);
  cursor: help;
`;

export const AmountsUnit = styled.span<{ primary?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ primary }) =>
    primary ? "var(--gray-text)" : "var(--text-default)"};
`;
