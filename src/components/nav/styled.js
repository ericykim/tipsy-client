import { Link } from "react-router-dom";
import styled from "styled-components";
import { SITE_RED, TEXT_BLACK } from "../../styles/colors";

export const StyledLink = styled(Link)`
    color: ${props => props.color ? props.color : TEXT_BLACK};
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    :hover {
        color: ${SITE_RED};
    }
`

export const Pages = styled.div`
    display: flex;
    float: right;
    flex-direction: row-reverse;
    align-items: center;
`

export const NavButton = styled.button`
background: none!important;
border: none;
padding: 0!important;
cursor: pointer;

:hover {
    color: ${SITE_RED};
    text-decoration: underline;
}
`