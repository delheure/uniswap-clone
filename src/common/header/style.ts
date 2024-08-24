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
