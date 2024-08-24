import styled from "styled-components";
import { HEADER_HEIGHT, ZIndex } from "~/styles/constants";

export const HeaderWrapper = styled.header`
  position: sticky;
  z-index: ${ZIndex.STICKY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  min-height: ${HEADER_HEIGHT}px;
  padding: 0 12px;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LogoBox = styled.h1`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
  padding: 8px;
  cursor: pointer;
`;

export const LogoTitleUnit = styled.span`
  color: var(--primary-color);
  font-size: 18px;
`;

export const IconBox = styled.button`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 8px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  color: var(--text-gray);
  transition: 250ms;

  &:hover {
    background-color: var(--hover-gray);
  }

  img {
    width: 20px;
    height: 20px;
    border-right: 6px;
  }
`;
