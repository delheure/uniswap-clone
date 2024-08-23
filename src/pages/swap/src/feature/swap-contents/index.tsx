import React, { useEffect, useState } from "react";
import InputCounter from "~/pages/swap/src/feature/input-counter";
import { exchangeRates, Tokens } from "~/types/tokens";
import CurrencyButton from "src/pages/swap/src/feature/currency-button";
import ConfirmButton from "src/pages/swap/src/feature/confirm-button";
import SvgIcon from "~/common/svg-icon";
import ArrowIcon from "~/assets/ico/icon_arrow_down.svg";
import GasFeeIcon from "~/assets/ico/icon_gasfee.svg";
import {
  ButtonBox,
  GasFeeBox,
  GasFeeField,
  MoreBox,
} from "~/pages/swap/src/feature/swap-contents/style";
import useModal from "~/common/modal/useModal";

const SwapContents = () => {
  const { openModal } = useModal();
  const [sellToken, setSellToken] = useState<Tokens>(Tokens.ETH);
  const [buyToken, setBuyToken] = useState<Tokens>(Tokens.USDC);
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [isPriceReversed, setIsPriceReversed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // 토큰 교환
  const handleChange = () => {
    setSellToken(buyToken);
    setBuyToken(sellToken);
    setSellAmount(buyAmount);
    setBuyAmount(sellAmount);
  };

  // sell 입력 값에 따른 buy 값 계산
  const calcSellAmount = (
    buyToken: Tokens,
    sellAmount: number,
    sellToken: Tokens,
  ) => {
    const sellRate = exchangeRates[sellToken][buyToken];
    return sellAmount * sellRate;
  };

  // buy 입력 값에 따른 sell 값 계산
  const calcBuyAmount = (
    sellToken: Tokens,
    buyAmount: number,
    buyToken: Tokens,
  ) => {
    const buyRate = exchangeRates[buyToken][sellToken];
    return buyAmount * buyRate;
  };

  // sellAmount 변경 시 buyAmount 계산
  useEffect(() => {
    if (sellAmount > 0) {
      const newBuyAmount = calcSellAmount(buyToken, sellAmount, sellToken);
      if (newBuyAmount !== buyAmount) {
        setBuyAmount(newBuyAmount);
      }
    }
  }, [sellAmount, sellToken, buyToken]);

  // buyAmount 변경 시 sellAmount 계산
  useEffect(() => {
    if (buyAmount > 0) {
      const newSellAmount = calcBuyAmount(sellToken, buyAmount, buyToken);
      if (newSellAmount !== sellAmount) {
        setSellAmount(newSellAmount);
      }
    }
  }, [buyAmount, buyToken, sellToken]);

  const handleMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <InputCounter
        title="sell"
        selectedToken={sellToken}
        onTokenChange={setSellToken}
        amount={sellAmount}
        onAmountChange={setSellAmount}
      />
      <CurrencyButton handleChange={handleChange} />
      <InputCounter
        title="buy"
        selectedToken={buyToken}
        onTokenChange={setBuyToken}
        amount={buyAmount}
        onAmountChange={setBuyAmount}
      />
      <ConfirmButton text="Connect wallet" />

      <GasFeeField onClick={handleMore} isOpen={isOpen}>
        <MoreBox>
          {!isOpen && (
            <GasFeeBox>
              <SvgIcon
                icon={<GasFeeIcon />}
                color="rgb(206, 206, 206)"
                size={16}
              />
              $1.111
            </GasFeeBox>
          )}

          <ButtonBox isOpen={isOpen}>
            <SvgIcon icon={<ArrowIcon />} size={24} />
          </ButtonBox>
        </MoreBox>
        {isOpen && <></>}
      </GasFeeField>
    </div>
  );
};

export default SwapContents;
