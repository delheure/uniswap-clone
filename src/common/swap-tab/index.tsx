import React from "react";
import { TabBox, TabUnit } from "~/common/swap-tab/style";

interface SwapTabProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const SwapTab = ({ selectedTab, setSelectedTab }: SwapTabProps) => {
  const TabList = ["swap", "limit", "send", "buy"];

  const handleSelect = (selectedTab: string) => {
    setSelectedTab(selectedTab);
  };

  return (
    <TabBox>
      {TabList.map((item, index) => {
        return (
          <TabUnit
            key={index}
            active={selectedTab === item}
            onClick={() => handleSelect(item)}
          >
            {item}
          </TabUnit>
        );
      })}
    </TabBox>
  );
};

export default SwapTab;
