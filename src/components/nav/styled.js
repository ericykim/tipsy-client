import { Link } from "react-router-dom";
import styled from "styled-components";
import { SITE_RED, TEXT_BLACK } from "../../styles/colors";

export const StyledLink = styled(Link)`
    color: ${TEXT_BLACK};

    :hover {
        color: ${SITE_RED};
    }
`

export const Pages = styled.div`
    display: flex;
    float: right;
    flex-direction: row-reverse;
`