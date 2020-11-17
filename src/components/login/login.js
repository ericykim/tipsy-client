import React from "react";
import { P1, SmallText } from "../../styles/typeStyles";
import { Link } from "react-router-dom";
import logo from "../../assets/SVG/logo.svg";
import {
  StyledButton,
  FormInput,
  Logo,
  LogoContainer,
} from "../../styles/globalElements";

const Login = () => {
  return (
    <div className="container">
      <LogoContainer className="col-12 my-4">
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <div className="row justify-content-center align-items-center">
        <div className="column col-6 my-5">
          <label for="username">
            <P1 className="mb-0">username</P1>
          </label>
          <FormInput
            className="form-control col-12 mb-3"
            id="username"
            placeholder=""
            type="text"
          />
          <label for="password">
            <P1 className="mb-0">password</P1>
          </label>
          <FormInput
            className=" form-control col-12 mb-3"
            id="username"
            placeholder=""
            type="text"
          />
          <StyledButton className="btn btn-success mb-3">
            <P1>login</P1>
          </StyledButton>
          <SmallText>
            If you are not a member, sign up <Link to="/signup">here</Link>
          </SmallText>
        </div>
      </div>
    </div>
  );
};

export default Login;
