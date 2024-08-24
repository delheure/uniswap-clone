import React from "react";
import WETHIcon from "~/assets/tokens/tokens_weth.png";
import { NetworkBox } from "~/common/header/network-select/style";

const NetworkSelect = () => {
  return (
    <NetworkBox>
      <img src={WETHIcon.src} alt="Ethereum Nerwork" />
    </NetworkBox>
  );
};

export default NetworkSelect;
