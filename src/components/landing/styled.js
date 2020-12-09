import { Link } from "react-router-dom";
import styled from "styled-components";
import { SITE_RED } from "../../styles/colors";

export const SearchContainer = styled.div.attrs({ className: "my-4" })`
  display: flex;
  position: relative;
  align-items: center;
`;

export const SearchInput = styled.input`
  font-family: FormulaCondensed-Regular, sans-serif;
  font-weight: 400;
  font-style: normal;

  font-size: 35px;
  letter-spacing: 2px;
  color: ${SITE_RED};
  line-height: 1px;
  width: 100%;
  padding-right: 16%;

  background: transparent;
  border: none;
  border-bottom: 2px solid ${SITE_RED};
  border-radius: 0;

  ::placeholder {
    color: ${SITE_RED};
  }

  :focus {
    outline: none;
  }

  @media (min-width: 576px) {
    font-size: 50px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  z-index: 10000000;
  right: 0;
`;

export const ListItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
