import styled from "styled-components";

import React from "react";

interface ConfirmButtonProps {
  text: string;
  handleConfirm?: () => void;
}

const ConfirmButton = ({ text, handleConfirm }: ConfirmButtonProps) => {
  return <ConfirmButtonUnit onClick={handleConfirm}>{text}</ConfirmButtonUnit>;
};

export default ConfirmButton;

export const ConfirmButtonUnit = styled.button`
  width: 100%;
  padding: 16px;
  margin: 4px 0 0 0;
  border-radius: 16px;
  background-color: rgb(255, 239, 255);
  color: rgb(252, 114, 255);
  font-size: 20px;
  font-weight: 535;

  &:hover {
    background-color: rgb(255, 239, 255);
  }
`;
