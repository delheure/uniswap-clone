import styled from "styled-components";
import { transition } from "~/styles/mixin";

export const SwapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 68px 8px 0;
  max-width: 480px;
  width: 100%;
`;

export const TabField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonBox = styled.div`
  padding: 6px 12px;
  cursor: pointer;
  ${transition};

  &:hover {
    opacity: 0.6;
  }
`;
