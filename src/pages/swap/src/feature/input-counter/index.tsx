import React, { useEffect, useState } from "react";
import {
  AmountUnit,
  CurrencyUnit,
  InputWrapper,
  SelectedTokenUnit,
  TitleUnit,
  TokensBox,
} from "~/pages/swap/style";
import { TokenList, tokenRates, Tokens } from "~/types/tokens";
import SelectTokenModal from "src/pages/swap/src/feature/select-token-modal";
import useModal from "~/common/modal/useModal";
import SvgIcon from "~/common/svg-icon";
import DropdownIcon from "~/assets/ico/icon_dropdown.svg";

interface InputCounterProps {
  title?: string;
  selectedToken: Tokens;
  onTokenChange: (token: Tokens) => void;
  amount: number;
  onAmountChange: (amount: number) => void;
}

const InputCounter = ({
  title = "sell",
  selectedToken,
  onTokenChange,
  amount = 0,
  onAmountChange,
}: InputCounterProps) => {
  const { openModal, closeModal } = useModal();
  const [totalCurrency, setTotalCurrency] = useState("0");
  // 선택된 토큰에 따른 계산
  const calcCurrency = () => {
    const sellRate = tokenRates[selectedToken];
    const calcTotalCurrency = sellRate * amount ?? 0;

    // 특정 임계점 이후 단위 변환
    if (calcTotalCurrency >= 1e12) {
      return `${(calcTotalCurrency / 1e12).toFixed(2)}T`;
    } else if (calcTotalCurrency >= 1e9) {
      return `${(calcTotalCurrency / 1e9).toFixed(2)}B`;
    } else if (calcTotalCurrency >= 1e6) {
      return `${(calcTotalCurrency / 1e6).toFixed(2)}M`;
    } else {
      return calcTotalCurrency.toLocaleString();
    }
  };

  // 선택한 토큰으로 상태 변경
  const handleTokenSelect = (token: Tokens) => {
    onTokenChange(token);
    closeModal();
  };

  // 선택된 토큰 정보
  const selectedTokenData = TokenList.find(
    (token) => token.name === selectedToken,
  );

  const handleSelectToken = () => {
    openModal(
      <SelectTokenModal
        tokenList={TokenList}
        selectedToken={selectedToken}
        onTokenSelect={handleTokenSelect}
      />,
    );
  };

  useEffect(() => {
    if (amount > 0 && !!selectedToken) {
      setTotalCurrency(calcCurrency());
    }
  }, [amount, selectedToken]);
  return (
    <InputWrapper>
      <TitleUnit>{title}</TitleUnit>
      <TokensBox>
        <AmountUnit
          placeholder="0"
          autoComplete="off"
          minLength={1}
          maxLength={79}
          value={amount}
          onChange={(e) => onAmountChange(+e.target.value)}
        />
        {selectedTokenData && (
          <SelectedTokenUnit onClick={handleSelectToken}>
            <img src={selectedTokenData.icon} alt={selectedToken} />
            {selectedToken}
            <SvgIcon icon={<DropdownIcon />} size={12} />
          </SelectedTokenUnit>
        )}
      </TokensBox>
      {/*토큰 선택 && 인풋 값 입력되면 노출 */}
      <CurrencyUnit>${totalCurrency ?? 0}</CurrencyUnit>
    </InputWrapper>
  );
};

export default InputCounter;
