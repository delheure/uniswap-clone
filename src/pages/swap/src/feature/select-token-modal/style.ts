import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { ZIndex } from "~/styles/constants";

export const ModalLayoutWrapper = styled.div<{ isBottom?: boolean }>`
  overflow: hidden;
  z-index: ${ZIndex.MODAL};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const DimmedLayerUnit = styled(motion.div)`
  z-index: ${ZIndex.BACKGROUND};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalContentField = styled(motion.div)`
  overflow-y: auto;
  z-index: ${ZIndex.MODAL};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  width: 50vw;
  max-width: 420px;
  height: auto;
  max-height: 700px;
  background: var(--default-background);
  border-radius: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleUnit = styled.h3`
  font-size: 16px;
  font-weight: 535;
`;

export const ButtonBox = styled.button``;

export const ContentsBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const TokenItem = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 5px 12px 5px 6px;
  font-size: 16px;
  font-weight: 535;
  color: rgb(34, 34, 34);
  border: 1px solid rgba(34, 34, 34, 0.07);
  border-radius: 18px;

  &:hover {
    background-color: rgba(34, 34, 34, 0.07);
  }

  img {
    width: 24px;
    height: 24px;
    margin: 0 8px 0 0;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: rgba(34, 34, 34, 0.07);
    `};
`;
