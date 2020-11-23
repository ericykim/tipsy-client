import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/SVG/logo.svg';
import { Logo, LogoContainer } from '../../styles/globalElements';
import { P1 } from '../../styles/typeStyles';
import { Pages, StyledLink } from './styled';

const Nav = () => {
    return (
        <div className='row justify-content-between my-4'>
            <div className='col-4'></div>
            <LogoContainer className='col-4'>
                <Link to='/'>
                    <Logo src={logo} />
                </Link>
            </LogoContainer>
            <Pages className='col-4'>
                <StyledLink to='/signup'>
                    <P1>Sign up</P1>
                </StyledLink>
                <StyledLink to='/login' className='mr-3'>
                    <P1>Log in</P1>
                </StyledLink>
                <StyledLink to='/profile' className='mr-3'>
                    <P1>Profile</P1>
                </StyledLink>
            </Pages>
        </div>
    );
};

export default Nav;
