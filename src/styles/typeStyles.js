import styled from "styled-components";
import '../fonts/fonts.css'
import { SITE_HIGHLIGHT, SITE_RED, TEXT_BLACK } from "./colors";

export const H1 = styled.h1`
  font-family: FormulaCondensed-Black;
  font-weight: 900;
  font-style: normal;

  font-size: 75px;
  letter-spacing: 5px;
  color: transparent;
  -webkit-text-stroke: 2px ${TEXT_BLACK};
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 125px;
    -webkit-text-stroke: 3px ${TEXT_BLACK};
  }

  :hover {
    -webkit-text-stroke: 2px ${SITE_HIGHLIGHT};
    color: ${TEXT_BLACK};
    cursor: pointer;
    text-shadow: -3.5px 4px ${TEXT_BLACK};
  }
`;

export const H2 = styled.h2`
  font-family: FormulaCondensed-Regular;
  font-weight: 400;
  font-style: normal;

  font-size: 35px;
  letter-spacing: 2px;
  color: ${SITE_RED};

  @media (min-width: (min-width: 992px) {
    font-size: 50px;
  }

`;

export const H3 = styled.h3`
  font-size: 20px;
  color: purple;
`;

export const Label = styled.p`
  font-size: 20px;
  color: blue;
`;

export const P1 = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;

  margin-bottom: 0;
`;

export const SmallText = styled.p`
  font-size: 10px;
  color: gray;
  font-family: Montserrat;
  font-weight: 400;
  font-style: normal;
`;
