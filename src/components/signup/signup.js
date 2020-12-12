import React, { useState } from "react";
import { P1, SmallText } from "../../styles/typeStyles";
import { Link } from "react-router-dom";
import {
  FormInput,
  StyledButton,
  StyledSelect,
  Logo,
  LogoContainer,
} from "../../styles/globalElements";
import logo from "../../assets/SVG/logo.svg";
import userService from "../../services/userService";
import history from "../../history";
import UserForm from "../userForm/userForm";

const Signup = () => {

  return (
    <div className="container">
      <LogoContainer className="col-12 my-4">
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <UserForm />
    </div>
  );
};

export default Signup;
