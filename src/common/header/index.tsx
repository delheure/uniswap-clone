import React from "react";
import {
  HeaderBox,
  HeaderWrapper,
  LogoBox,
  LogoTitleUnit,
} from "~/common/header/style";
import Menu from "~/common/header/menu";
import SvgIcon from "~/common/svg-icon";
import LogoIcon from "~/assets/ico/icon_logo.svg";
import ArrowIcon from "~/assets/ico/icon_arrow.svg";
import SearchInput from "~/common/header/search-input";
import NetworkSelect from "~/common/header/network-select";
import ConnectButton from "~/pages/swap/src/feature/connect-button";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBox>
        <LogoBox>
          <SvgIcon icon={<LogoIcon />} size={22} color="#FC74FE" />
          <LogoTitleUnit>Uniswap</LogoTitleUnit>
          <SvgIcon icon={<ArrowIcon />} size={12} color="rgb(125, 125, 125)" />
        </LogoBox>
        <Menu />
      </HeaderBox>

      <SearchInput />

      <HeaderBox>
        <NetworkSelect />
        <ConnectButton type="header" text="connect" />
      </HeaderBox>
    </HeaderWrapper>
  );
};

export default Header;
