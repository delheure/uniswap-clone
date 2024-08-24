import React from "react";
import {
    HeaderBox,
    HeaderWrapper,
    LogoBox,
    LogoTitleUnit, IconBox,
} from "~/common/header/style";
import Menu from "~/common/header/menu";
import SvgIcon from "~/common/svg-icon";
import LogoIcon from "~/assets/ico/icon_logo.svg";
import ArrowIcon from "~/assets/ico/icon_arrow.svg";
import SearchInput from "~/common/header/search-input";
import ConnectButton from "~/pages/swap/src/feature/connect-button";
import LanguageIcon from "~/assets/ico/icon_language.svg";
import WETHIcon from "~/assets/tokens/tokens_weth.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBox>
        <LogoBox>
          <SvgIcon icon={<LogoIcon />} size={22} color="var(--primary-logo)" />
          <LogoTitleUnit>Uniswap</LogoTitleUnit>
          <SvgIcon icon={<ArrowIcon />} size={12} color="var(--gray-text)" />
        </LogoBox>
        <Menu />
      </HeaderBox>

      <SearchInput />

      <HeaderBox>
          <IconBox>
              <SvgIcon icon={<LanguageIcon />} size={20} />
          </IconBox>
          <IconBox>
              <img src={WETHIcon.src} alt="Ethereum Nerwork" />
          </IconBox>
        <ConnectButton type="header" text="connect" />
      </HeaderBox>
    </HeaderWrapper>
  );
};

export default Header;
