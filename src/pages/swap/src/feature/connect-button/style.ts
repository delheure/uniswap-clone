import styled, { css } from "styled-components";
import { ConnectButtonProps } from "~/pages/swap/src/feature/connect-button/index";

const ButtonSet = {
  header: css`
    width: auto;
    height: 40px;
    padding: 10px 12px;
    border-radius: 9999px;
    font-size: 16px;
  `,
  confirm: css`
    width: 100%;
  `,
};

export const ConnectButtonUnit = styled.button<{
  type?: ConnectButtonProps["type"];
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 4px 0 0 0;
  border-radius: 16px;
  background-color: rgb(255, 239, 255);
  color: rgb(252, 114, 255);
  font-size: 20px;
  font-weight: 535;
  text-transform: capitalize;

  ${({ type }) => type && ButtonSet[type]};

  &:hover {
    background-color: #f6e9fa;
  }
`;
