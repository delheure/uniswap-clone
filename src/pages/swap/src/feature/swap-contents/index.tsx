import React, { useEffect, useState } from "react";
import InputCounter from "~/pages/swap/src/feature/input-counter";
import { exchangeRates, tokenRates, Tokens } from "~/types/tokens";
import CurrencyButton from "src/pages/swap/src/feature/currency-button";
import ConnectButton from "src/pages/swap/src/feature/connect-button";
import SvgIcon from "~/common/svg-icon";
import ArrowIcon from "~/assets/ico/icon_arrow_down.svg";
import GasFeeIcon from "~/assets/ico/icon_gasfee.svg";
import {
  ButtonBox,
  CurrencyUnit,
  GasFeeBox,
  GasFeeField,
  InfoField,
  InfoTitleBox,
  MoreBox,
  RateBox,
  SwapContentsWrapper,
} from "~/pages/swap/src/feature/swap-contents/style";
import GasfeeInformation from "~/pages/swap/src/feature/gasfee-information";

const SwapContents = () => {
  const [sellToken, setSellToken] = useState<Tokens | null>(Tokens.ETH);
  const [buyToken, setBuyToken] = useState<Tokens | null>(null);
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [isRateReversed, setIsRateReversed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isAllSelected = sellToken && buyToken && sellAmount && buyAmount;

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

  const handleRateToggle = () => {
    setIsRateReversed(!isRateReversed);
  };

  // 환율 렌더링 부분
  const exchangeRate = isAllSelected ? exchangeRates[sellToken][buyToken] : 0;
  const currency = isRateReversed
    ? buyToken && tokenRates[buyToken]
    : sellToken && tokenRates[sellToken];

  const displayRate = isRateReversed
    ? `1 ${buyToken} = ${(1 / exchangeRate).toLocaleString()} ${sellToken}`
    : `1 ${sellToken} = ${exchangeRate.toLocaleString()} ${buyToken}`;

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

  // buy, sell의 인풋, 토큰 모두 선택됐을 때, 수수료 계산 노출
  useEffect(() => {
    if (sellToken && sellAmount && buyToken && buyAmount) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(!isOpen);
    }
  }, [sellToken, sellAmount, buyToken, buyAmount]);

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

      {isAllSelected && (
        <InfoField>
          <InfoTitleBox>
            <RateBox onClick={handleRateToggle}>
              {displayRate}&nbsp;
              {currency && (
                <CurrencyUnit>(${currency.toLocaleString() ?? 0})</CurrencyUnit>
              )}
            </RateBox>

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
            </GasFeeField>
          </InfoTitleBox>
          <GasfeeInformation isOpen={isOpen} />
        </InfoField>
      )}
    </SwapContentsWrapper>
  );
};

export default SwapContents;
