import React from "react";
import SvgIcon from "~/common/svg-icon";
import SearchIcon from "~/assets/ico/icon_search.svg";
import {
  NFTSearchBox,
  SearchInputBox,
  SearchInputWrapper,
} from "~/common/header/search-input/style";

export interface SearchInputProps {
  type?: "header" | "modal";
  placeHolder?: string;
}

const SearchInput = ({
  type = "header",
  placeHolder = "Search tokens and NFT collections",
}: SearchInputProps) => {
  return (
    <SearchInputWrapper type={type}>
      <SvgIcon icon={<SearchIcon />} size={20} />
      <SearchInputBox
        placeholder={placeHolder}
        autoComplete="off"
        minLength={1}
        maxLength={79}
      />
      {type === "header" && <NFTSearchBox>/</NFTSearchBox>}
    </SearchInputWrapper>
  );
};

export default SearchInput;
