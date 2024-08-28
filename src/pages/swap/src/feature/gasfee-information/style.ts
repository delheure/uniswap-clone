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

export const AmountsUnit = styled.span<{ primary?: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ primary }) =>
    primary === "primary" ? "var(--text-gray)" : "var(--text-default)"};
`;

export const AutoUnit = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 20px;
  padding: 0px 6px;
  background: rgba(34, 34, 34, 0.07);
  border-radius: 8px;
  color: var(--text-gray);
`;
