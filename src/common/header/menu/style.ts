import styled, { css } from "styled-components";
import { noneDraggable } from "~/styles/mixin";

export const NavMenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  ${noneDraggable};
`;

export const NavMenuItem = styled.div`
  position: relative;
  margin: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover > div {
    display: block;
  }
`;

export const NavMenuText = styled.div<{ active?: boolean }>`
  font-size: 18px;
  font-weight: 485;
  color: var(--gray-text);
  cursor: pointer;

  &:hover {
    color: var(--default-text);
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--default-text);
    `};
`;

export const SubMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0%;
`;

export const SubMenuItem = styled.div`
  padding: 8px 16px;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
  }
`;
