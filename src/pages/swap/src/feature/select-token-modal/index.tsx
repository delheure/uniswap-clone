import React from "react";

import useModal from "~/common/modal/useModal";
import CloseIcon from "~/assets/ico/icon_close.svg";
import SvgIcon from "~/common/svg-icon";
import {
  ButtonBox,
  ContentsBox,
  DimmedLayerUnit,
  IconUnit,
  ModalContentField,
  ModalLayoutWrapper,
  SearchBox,
  TitleBox,
  TitleUnit,
  TokenItem,
} from "~/pages/swap/src/feature/select-token-modal/style";
import { Tokens } from "~/types/tokens";
import SearchInput from "~/common/header/search-input";
import WETHIcon from "~/assets/tokens/tokens_weth.png";

interface SelectTokenModalProps {
  tokenList: { name: Tokens; icon: string }[];
  selectedTokenName: Tokens | null;
  onTokenSelect: (token: Tokens) => void;
}

const SelectTokenModal = ({
  tokenList,
  selectedTokenName,
  onTokenSelect,
}: SelectTokenModalProps) => {
  const { closeModal } = useModal();

  const handleTokenSelect = (token: Tokens) => {
    onTokenSelect(token);
    closeModal();
  };

  return (
    <ModalLayoutWrapper>
      <DimmedLayerUnit onClick={closeModal} />

      <ModalContentField key="modal">
        <TitleBox>
          <TitleUnit>Select a token</TitleUnit>
          <ButtonBox>
            <SvgIcon icon={<CloseIcon />} size={24} />
          </ButtonBox>
        </TitleBox>
        <SearchBox>
          <SearchInput
            type="modal"
            placeHolder="Search name or paste address"
          />
          <IconUnit>
            <img src={WETHIcon.src} alt="Ethereum Nerwork" />
          </IconUnit>
        </SearchBox>
        <ContentsBox>
          {tokenList.map((item) => (
            <TokenItem
              key={item.name}
              onClick={() => handleTokenSelect(item.name)}
              active={selectedTokenName === item.name}
            >
              <img src={item.icon} alt={item.name} />
              {item.name}
            </TokenItem>
          ))}
        </ContentsBox>
      </ModalContentField>
    </ModalLayoutWrapper>
  );
};

export default SelectTokenModal;
