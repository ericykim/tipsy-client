import styled from "styled-components";
import { SITE_HIGHLIGHT, SITE_RED } from "./colors";


export const SearchArrowImg = styled.img`
    width: 100%;
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
    background-color: ${SITE_RED};
    color: white;
    border: none;
`

export const FormInput = styled.input`
    border-radius: 0;

    :focus {
        border-color: ${SITE_HIGHLIGHT} !important;
        box-shadow: 0 0 0 0.2rem rgba(208, 83, 83, 0.25);
    }
`