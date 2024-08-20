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
  padding: 0 12px;
`;
