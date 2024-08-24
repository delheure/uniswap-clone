import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  min-width: 280px;
  max-width: 400px;
  width: 100vw;
  height: 40px;
  padding: 8px 16px;
  background-color: var(--gray-background);
  border: 1px solid rgba(34, 34, 34, 0.07);
  border-radius: 20px;
`;

export const SearchInputBox = styled.input`
  width: 100%;
  color: var(--text-default);
  background: transparent;
  border: 0;
  outline: 0;

  &::placeholder {
    color: #7d7d7d;
  }
`;

export const NFTSearchBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  width: 20px;
  height: 20px;
  color: var(--text-gray);
  font-size: 12px;
  font-weight: 535;
  line-height: 16px;
  border-radius: 4px;
  background-color: rgba(34, 34, 34, 0.07);
  backdrop-filter: blur(60px);
  opacity: 0.6;
`;
