import React, { ChangeEvent, useEffect, useState } from "react";

import { TokenList, tokenRates, Tokens } from "~/types/tokens";
import SelectTokenModal from "src/pages/swap/src/feature/select-token-modal";
import useModal from "~/common/modal/useModal";
import SvgIcon from "~/common/svg-icon";
import DropdownIcon from "~/assets/ico/icon_dropdown.svg";
import DropdownIconWhite from "~/assets/ico/icon_dropdown_white.svg";
import {
  AmountUnit,
  CurrencyUnit,
  InputWrapper,
  SelectedTokenBox,
  TitleUnit,
  TokensBox,
} from "~/pages/swap/src/feature/input-counter/style";
import BigNumber from "bignumber.js";

interface InputCounterProps {
  title?: string;
  selectedTokenName: Tokens | null;
  onTokenChange: (token: Tokens) => void;
  amount: string;
  onAmountChange: (amount: string) => void;
}

const InputCounter = ({
  title = "sell",
  selectedTokenName,
  onTokenChange,
  amount: initialAmount,
  onAmountChange,
}: InputCounterProps) => {
  const { openModal, closeModal } = useModal();
  const [amount, setAmount] = useState(initialAmount);
  const [totalCurrency, setTotalCurrency] = useState("0");
  // 총합 USD 노출 조건
  const totalUSD = parseFloat(amount) > 0 && !!selectedTokenName;

  // 숫자, 소수점만 입력 가능 및 값 업데이트
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let updatedValue = e.target.value;

    const regex = /^\d*\.?\d{0,6}$/;

    if (regex.test(updatedValue)) {
      onAmountChange(updatedValue);
      setAmount?.(updatedValue);
    }
  };

  // 선택된 토큰에 따른 계산
  const calcCurrency = () => {
    // 선택된 토큰이 없을 때 반환
    if (!selectedTokenName) {
      return "0";
    }
    const sellRate = new BigNumber(tokenRates[selectedTokenName]);
    const calcTotalCurrency = sellRate.multipliedBy(new BigNumber(amount));

    // 특정 임계점 이후 단위 변환
    if (calcTotalCurrency.isGreaterThanOrEqualTo(1e12)) {
      return `${calcTotalCurrency.dividedBy(1e12).toFixed(2)}T`;
    } else if (calcTotalCurrency.isGreaterThanOrEqualTo(1e9)) {
      return `${calcTotalCurrency.dividedBy(1e9).toFixed(2)}B`;
    } else if (calcTotalCurrency.isGreaterThanOrEqualTo(1e6)) {
      return `${calcTotalCurrency.dividedBy(1e6).toFixed(2)}M`;
    } else {
      return calcTotalCurrency.toFixed(2).toLocaleString();
    }
  };

  // 선택한 토큰으로 상태 변경
  const handleTokenSelect = (token: Tokens) => {
    onTokenChange(token);
    closeModal();
  };

  // 선택된 토큰 정보
  const selectedTokenData = TokenList.find(
    (token) => token.name === selectedTokenName,
  );

  // 토큰 선택 모달
  const handleSelectToken = () => {
    openModal(
      <SelectTokenModal
        tokenList={TokenList}
        selectedTokenName={selectedTokenName}
        onTokenSelect={handleTokenSelect}
      />,
    );
  };

  // 선택된 토큰 * 총합 = USD로 환산
  useEffect(() => {
    if (!!totalUSD) {
      setTotalCurrency(calcCurrency());
    }
  }, [amount, selectedTokenName]);

  useEffect(() => {
    setAmount(initialAmount);
  }, [initialAmount]);

  return (
    <InputWrapper>
      <TitleUnit>{title}</TitleUnit>
      <TokensBox>
        <AmountUnit
          type="text"
          placeholder="0"
          autoComplete="off"
          minLength={1}
          maxLength={79}
          value={amount}
          onChange={handleInputChange}
        />
        {selectedTokenData ? (
          <SelectedTokenBox onClick={handleSelectToken}>
            <img src={selectedTokenData.icon} />
            <span>{selectedTokenName}</span>

            <SvgIcon icon={<DropdownIcon />} size={12} />
          </SelectedTokenBox>
        ) : (
          <SelectedTokenBox onClick={handleSelectToken} isSelected={true}>
            <span>Select token</span>
            <SvgIcon icon={<DropdownIconWhite />} size={12} />
          </SelectedTokenBox>
        )}
      </TokensBox>
      {totalUSD && <CurrencyUnit>${totalCurrency ?? ""}</CurrencyUnit>}
    </InputWrapper>
  );
};

export default InputCounter;
