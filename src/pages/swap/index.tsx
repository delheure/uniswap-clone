import React, { useState } from "react";
import SwapTab from "src/common/swap-tab";
import SwapContents from "~/pages/swap/src/feature/swap-contents";
import useModal from "~/common/modal/useModal";
import { ButtonBox, SwapWrapper, TabField } from "~/pages/swap/style";
import SvgIcon from "~/common/svg-icon";
import SettingIcon from "~/assets/ico/icon_setting.svg";

const SwapPage = () => {
  const { openModal } = useModal();
  const [selectedTab, setSelectedTab] = useState("swap");

  const renderContent = () => {
    switch (selectedTab) {
      case "limit":
        return <>no</>;
      case "swap":
      default:
        return <SwapContents />;
    }
  };

  return (
    <SwapWrapper>
      <TabField>
        <SwapTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <ButtonBox>
          <SvgIcon
            icon={<SettingIcon />}
            size={24}
            color="rgb(125, 125, 125)"
          />
        </ButtonBox>
      </TabField>

      {renderContent()}
    </SwapWrapper>
  );
};

export default SwapPage;
