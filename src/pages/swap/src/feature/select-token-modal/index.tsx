import React from "react";

import useModal from "~/common/modal/useModal";
import CloseIcon from "~/assets/ico/icon_close.svg";
import SvgIcon from "~/common/svg-icon";
import {
  ButtonBox,
  ContentsBox,
  DimmedLayerUnit,
  ModalContentField,
  ModalLayoutWrapper,
  TitleBox,
  TitleUnit,
  TokenItem,
} from "~/pages/swap/src/feature/select-token-modal/style";
import { Tokens } from "~/types/tokens";

interface SelectTokenModalProps {
  tokenList: { name: Tokens; icon: string }[];
  selectedToken: Tokens | null;
  onTokenSelect: (token: Tokens) => void;
}

const SelectTokenModal = ({
  tokenList,
  selectedToken,
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
        <ContentsBox>
          {tokenList.map((item) => (
            <TokenItem
              key={item.name}
              onClick={() => handleTokenSelect(item.name)}
              active={selectedToken === item.name}
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
