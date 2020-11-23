import React, { useState } from 'react';
import { P1, SmallText } from '../../styles/typeStyles';
import { Link } from 'react-router-dom';
import {
    FormInput,
    StyledButton,
    StyledSelect,
    Logo,
    LogoContainer,
} from '../../styles/globalElements';
import logo from '../../assets/SVG/logo.svg';
import userService from '../../services/userService';

const Signup = () => {
    const [userType, setUserType] = useState('BARTENDER');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const register = () => {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
            verifyPassword: verifyPassword,
            userType: userType,
        };
        userService.registerUser(user).then((newUser) => console.log(newUser));
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
                        <P1 className='mb-0'>First Name</P1>
                    </label>
                    <FormInput
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className='form-control col-6 mb-3'
                        id='firstName'
                        placeholder=''
                        type='text'
                    />
                    <label>
                        <P1 className='mb-0'>Last Name</P1>
                    </label>
                    <FormInput
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className='form-control col-6 mb-3'
                        id='lastname'
                        placeholder=''
                        type='text'
                    />
                    <label>
                        <P1 className='mb-0'>Email</P1>
                    </label>
                    <FormInput
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className='form-control col-12 mb-3'
                        id='email'
                        placeholder=''
                        type='email'
                    />
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
                    <label>
                        <P1 className='mb-0'>verify password</P1>
                    </label>
                    <FormInput
                        value={verifyPassword}
                        onChange={(event) => setVerifyPassword(event.target.value)}
                        className=' form-control col-12 mb-3'
                        id='verifyPassword'
                        placeholder=''
                        type='password'
                    />
                    <label>
                        <P1 className='mb-0'>who you are</P1>
                    </label>
                    <StyledSelect
                        className='form-control col-12 mb-3'
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value='BARTENDER' defaultValue>
                            bartender
                        </option>
                        <option value='CONNOISSEUR'>connoisseur</option>
                    </StyledSelect>
                    {/* {selectState === 'BARTENDER' ? (
                        <>
                            <label for='workplace'>
                                <P1 className='mb-0'>where do you work</P1>
                            </label>
                            <FormInput
                                className=' form-control col-12 mb-3'
                                id='username'
                                placeholder=''
                                type='text'
                            />
                        </>
                    ) : (
                        <>
                            <label for='favDrink'>
                                <P1 className='mb-0'>favorite drink</P1>
                            </label>
                            <FormInput
                                className=' form-control col-12 mb-3'
                                id='username'
                                placeholder=''
                                type='text'
                            />
                        </>
                    )} */}

                    <StyledButton className='btn btn-block my-3' onClick={() => register()}>
                        <P1>sign up</P1>
                    </StyledButton>
                    <SmallText>
                        If you are already a member, log in <Link to='/login'>here</Link>
                    </SmallText>
                </div>
            </div>
        </div>
    );
};

export default Signup;
