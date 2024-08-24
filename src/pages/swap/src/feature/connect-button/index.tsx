import React from "react";
import { ConnectButtonUnit } from "~/pages/swap/src/feature/connect-button/style";

export interface ConnectButtonProps {
  type?: "header" | "confirm";
  text: string;
  handleConfirm?: () => void;
}

const ConnectButton = ({
  type = "confirm",
  text,
  handleConfirm,
}: ConnectButtonProps) => {
  return (
    <ConnectButtonUnit type={type} onClick={handleConfirm}>
      {text}
    </ConnectButtonUnit>
  );
};

export default ConnectButton;
