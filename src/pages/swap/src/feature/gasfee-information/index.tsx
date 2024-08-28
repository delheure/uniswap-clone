import React from "react";
import {
  AmountsUnit,
  AutoUnit,
  GasfeeInformationWrapper,
  InfoDetailBox,
  TitleUnit,
} from "~/pages/swap/src/feature/gasfee-information/style";
import GasFeeIcon from "~/assets/ico/icon_gasfee.svg";
import SvgIcon from "~/common/svg-icon";

interface GasFeeInformationProps {
  isOpen: boolean;
}

const GasfeeInformation = ({ isOpen }: GasFeeInformationProps) => {
  return (
    <GasfeeInformationWrapper isOpen={isOpen}>
      <InfoDetailBox>
        <TitleUnit>Price impact</TitleUnit>
        <AmountsUnit>-0.3%</AmountsUnit>
      </InfoDetailBox>

      <InfoDetailBox>
        <TitleUnit>Max. slippage</TitleUnit>
        <AmountsUnit>
          <AutoUnit>Auto</AutoUnit> 0.5%
        </AmountsUnit>
      </InfoDetailBox>

      <InfoDetailBox>
        <TitleUnit>Receive at least</TitleUnit>
        <AmountsUnit>2742.38 USDC</AmountsUnit>
      </InfoDetailBox>

      <InfoDetailBox>
        <TitleUnit>Fee (0.25%)</TitleUnit>
        <AmountsUnit>$6.91</AmountsUnit>
      </InfoDetailBox>
      <InfoDetailBox>
        <TitleUnit>Network cost</TitleUnit>
        <AmountsUnit primary={"primary"}>
          <SvgIcon icon={<GasFeeIcon />} size={16} color="var(--gray-icon)" />
          $0.48
        </AmountsUnit>
      </InfoDetailBox>
      <InfoDetailBox>
        <TitleUnit>Order routing</TitleUnit>
        <AmountsUnit>Uniswap API</AmountsUnit>
      </InfoDetailBox>
    </GasfeeInformationWrapper>
  );
};

export default GasfeeInformation;
