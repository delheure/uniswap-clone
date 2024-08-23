import React, { useState } from "react";
import styled from "styled-components";
import SwapTab from "src/common/swap-tab";
import SwapContents from "~/pages/swap/src/feature/swap-contents";
import useModal from "~/common/modal/useModal";

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
      <SwapTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {renderContent()}
    </SwapWrapper>
  );
};

export default SwapPage;

export const SwapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 68px 8px 0;
  max-width: 480px;
  width: 100%;
`;
