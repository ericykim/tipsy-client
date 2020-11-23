import React, { useState } from 'react';
import { P1, SmallText } from '../../styles/typeStyles';
import { Link } from 'react-router-dom';
import logo from '../../assets/SVG/logo.svg';
import { StyledButton, FormInput, Logo, LogoContainer } from '../../styles/globalElements';
import { loginUser } from '../../actions/userAction';
import { connect } from 'react-redux';

const Login = ({ loginUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = () => {
        const user = {
            username: username,
            password: password,
        };
        loginUser(user);
    };

    return (
        <div className='container'>
            <LogoContainer className='col-12 my-4'>
                <Link to='/'>
                    <Logo src={logo} />
                </Link>
            </LogoContainer>
            <div className='row justify-content-center align-items-center'>
                <div className='column col-6 my-5'>
                    <label>
                        <P1 className='mb-0'>username</P1>
                    </label>
                    <FormInput
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className='form-control col-12 mb-3'
                        id='username'
                        placeholder=''
                        type='text'
                    />
                    <label>
                        <P1 className='mb-0'>password</P1>
                    </label>
                    <FormInput
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className=' form-control col-12 mb-3'
                        id='password'
                        placeholder=''
                        type='password'
                    />
                    <StyledButton onClick={() => userLogin()} className='btn btn-success mb-3'>
                        <P1>login</P1>
                    </StyledButton>
                    <SmallText>
                        If you are not a member, sign up <Link to='/signup'>here</Link>
                    </SmallText>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => loginUser(dispatch, user),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
