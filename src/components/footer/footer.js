import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TEXT_BLACK } from '../../styles/colors';
import whiteLogo from '../../assets/SVG/logo_white.svg';
import { Logo } from '../../styles/globalElements';
import { P1, P2 } from '../../styles/typeStyles';

export const FooterWrapper = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: ${TEXT_BLACK};
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 200px;
`;

export const SiteMap = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    white-space: nowrap;
`;

export const SiteMapLink = styled(Link)`
    text-decoration: none;
    color: white;

    flex: 1;
    display: flex;
    justify-content: center;
`;

export const BottomText = styled(P2)`
    color: white;
`;

const Footer = () => {
    const siteMap = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Sign up',
            link: 'signup',
        },
        {
            name: 'Privacy Policy',
            link: 'privacy-policy',
        },
    ];

    return (
        <FooterWrapper>
            <Logo src={whiteLogo} />
            <SiteMap className={'container'}>
                {siteMap.map((link, i) => {
                    return (
                        <SiteMapLink key={i} to={link.link}>
                            <P1>{link.name}</P1>
                        </SiteMapLink>
                    );
                })}
            </SiteMap>
            <BottomText>
                <span>Cheers 🍻 </span>
                <span>from MP, CL, & EK</span>
            </BottomText>
        </FooterWrapper>
    );
};

export default Footer;
