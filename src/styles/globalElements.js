import { Link } from "react-router-dom";
import styled from "styled-components";
import { SITE_HIGHLIGHT, SITE_RED, TEXT_BLACK } from "./colors";


export const SearchArrowImg = styled.img`
    width: 100%;
    z-index: 1;
`

export const Logo = styled.img`
    width: 100px;
`

export const LogoContainer = styled.div`
    text-align:center;
`

export const StyledSelect = styled.select`
    border-radius: 0;
`

export const StyledButton = styled.button`
    border-radius: 0;
    background-color: ${props=> props.color ? props.color : SITE_RED};
    color: white;
    border: none;

    :hover {
        border: solid 1px ${SITE_HIGHLIGHT};
        background-color: ${TEXT_BLACK};
        color: white;
    }
`

export const StyledSecondaryButton = styled.button`
    border-radius: 0;
    background-color: transparent;
    color: ${SITE_RED};
    border: solid 1px ${props=> props.border ? props.border : SITE_RED};

    :hover {
        border: solid 1px ${SITE_HIGHLIGHT};
        background-color: ${TEXT_BLACK};
        color: white;
    }
`

export const StyledButtonLink = styled(Link)`
    text-decoration: none;
    color: white;

    :hover {
        color: inherit;
        text-decoration: none;
    }
`

export const FormInput = styled.input`
    border-radius: 0;
`

export const OrderedList = styled.ol`
  padding-left: 18px;
`;

export const UnorderedList = styled.ul`
  padding-left: 18px;
`;

export const ListItem = styled.div`
    overflow-wrap: break-word;
    justify-content: space-between;
    display: flex;
    align-items: center;
`
