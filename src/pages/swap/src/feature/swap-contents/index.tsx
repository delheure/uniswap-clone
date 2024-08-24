import React, { useEffect, useState } from "react";
import InputCounter from "~/pages/swap/src/feature/input-counter";
import { exchangeRates, Tokens } from "~/types/tokens";
import CurrencyButton from "src/pages/swap/src/feature/currency-button";
import ConnectButton from "src/pages/swap/src/feature/connect-button";
import SvgIcon from "~/common/svg-icon";
import ArrowIcon from "~/assets/ico/icon_arrow_down.svg";
import GasFeeIcon from "~/assets/ico/icon_gasfee.svg";
import {
  ButtonBox,
  GasFeeBox,
  GasFeeField,
  MoreBox,
  SwapContentsWrapper,
} from "~/pages/swap/src/feature/swap-contents/style";

const SwapContents = () => {
  const [sellToken, setSellToken] = useState<Tokens | null>(Tokens.ETH);
  const [buyToken, setBuyToken] = useState<Tokens | null>(null);
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
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
    buyToken: Tokens | null,
    sellAmount: number,
    sellToken: Tokens | null,
  ) => {
    if (buyToken && sellToken) {
      const sellRate = exchangeRates[sellToken][buyToken];
      return sellAmount * sellRate;
    }
    return 0;
  };

  // buy 입력 값에 따른 sell 값 계산
  const calcBuyAmount = (
    sellToken: Tokens | null,
    buyAmount: number,
    buyToken: Tokens | null,
  ) => {
    if (sellToken && buyToken) {
      const buyRate = exchangeRates[buyToken][sellToken];
      return buyAmount * buyRate;
    }
    return 0;
  };

  const handleMore = () => {
    setIsOpen(!isOpen);
  };

  // sellAmount 변경 시 buyAmount 계산
  useEffect(() => {
    if (!!sellAmount) {
      const newBuyAmount = calcSellAmount(buyToken, sellAmount, sellToken);
      if (newBuyAmount !== buyAmount) {
        setBuyAmount(newBuyAmount);
      }
    }
  }, [sellAmount, sellToken, buyToken]);

  // buyAmount 변경 시 sellAmount 계산
  useEffect(() => {
    if (!!buyAmount) {
      const newSellAmount = calcBuyAmount(sellToken, buyAmount, buyToken);
      if (newSellAmount !== sellAmount) {
        setSellAmount(newSellAmount);
      }
    }
  }, [buyAmount, buyToken, sellToken]);

  // 동일한 토큰 선택된 경우, 토큰 선택 버튼으로 변경
  useEffect(() => {
    if (sellToken === buyToken) {
      setBuyToken(null);
    }
  }, [sellToken, buyToken]);

  return (
    <SwapContentsWrapper>
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
      <ConnectButton text="Connect wallet" />

      <GasFeeField onClick={handleMore} isOpen={isOpen}>
        {isOpen && (
          <MoreBox>
            <GasFeeBox>
              <SvgIcon
                icon={<GasFeeIcon />}
                color="rgb(206, 206, 206)"
                size={16}
              />
              $1.111
            </GasFeeBox>

            <ButtonBox isOpen={isOpen}>
              <SvgIcon icon={<ArrowIcon />} size={24} />
            </ButtonBox>
          </MoreBox>
        )}
        {isOpen && <></>}
      </GasFeeField>
    </SwapContentsWrapper>
  );
};

export default SwapContents;
