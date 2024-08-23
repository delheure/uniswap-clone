import ETHIcon from "~/assets/tokens/tokens_eth.png";
import WBTCIcon from "~/assets/tokens/tokens_wbtc.png";
import USDCIcon from "~/assets/tokens/tokens_usdc.png";

export enum Tokens {
  ETH = "ETH",
  WBTC = "WBTC",
  USDC = "USDC",
}

export type TokenType = "ETH" | "WBTC" | "USDC";

export const TokenList = [
  {
    name: Tokens.ETH,
    icon: ETHIcon.src,
  },
  {
    name: Tokens.WBTC,
    icon: WBTCIcon.src,
  },
  {
    name: Tokens.USDC,
    icon: USDCIcon.src,
  },
];

// 각 토큰의 USD 환율
export const tokenRates: { [key in Tokens]: number } = {
  [Tokens.ETH]: 1000,
  [Tokens.WBTC]: 10000,
  [Tokens.USDC]: 1,
};

// 토큰 간 가격
export const exchangeRates: Record<Tokens, Record<Tokens, number>> = {
  [Tokens.ETH]: {
    [Tokens.ETH]: 1,
    [Tokens.WBTC]: 0.1,
    [Tokens.USDC]: 1000,
  },
  [Tokens.WBTC]: {
    [Tokens.ETH]: 10,
    [Tokens.WBTC]: 1,
    [Tokens.USDC]: 10000,
  },
  [Tokens.USDC]: {
    [Tokens.ETH]: 0.001,
    [Tokens.WBTC]: 0.0001,
    [Tokens.USDC]: 1,
  },
};
