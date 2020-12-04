import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SITE_RED } from '../../styles/colors';
import logo from '../../assets/SVG/logo.svg';
import { Logo, LogoContainer } from '../../styles/globalElements';
import { H1, P1, SmallText, P2 } from '../../styles/typeStyles';

export const FooterWrapper = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: ${SITE_RED};
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
            <Logo src={logo} />
            <SiteMap className={'container'}>
                {siteMap.map((link) => {
                    return (
                        <SiteMapLink to={link.link}>
                            <P1>{link.name}</P1>
                        </SiteMapLink>
                    );
                })}
            </SiteMap>
            <BottomText>
                <span>Cheers 🍻</span>
                <span>from MP, CL, & EK</span>
            </BottomText>
        </FooterWrapper>
    );
};

export default Footer;
