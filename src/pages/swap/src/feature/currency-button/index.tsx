import React from "react";
import SvgIcon from "~/common/svg-icon";
import CurrencyIcon from "~/assets/ico/icon_swap_currency.svg";
import { CurrencyButtonUnit } from "~/pages/swap/src/feature/currency-button/style";

interface CurrencyButtonProps {
  handleChange: () => void;
}

const CurrencyButton = ({ handleChange }: CurrencyButtonProps) => {
  return (
    <CurrencyButtonUnit onClick={handleChange}>
      <SvgIcon icon={<CurrencyIcon />} size={16} />
    </CurrencyButtonUnit>
  );
};

export default CurrencyButton;
