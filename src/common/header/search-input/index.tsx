import React from "react";
import SvgIcon from "~/common/svg-icon";
import SearchIcon from "~/assets/ico/icon_search.svg";
import {
  NFTSearchBox,
  SearchInputBox,
  SearchInputWrapper,
} from "~/common/header/search-input/style";

const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <SvgIcon icon={<SearchIcon />} size={20} />
      <SearchInputBox
        placeholder="Search tokens and NFT collections"
        autoComplete="off"
        minLength={1}
        maxLength={79}
      />
      <NFTSearchBox>/</NFTSearchBox>
    </SearchInputWrapper>
  );
};

export default SearchInput;
