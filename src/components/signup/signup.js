import React from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  LogoContainer,
} from "../../styles/globalElements";
import logo from "../../assets/SVG/logo.svg";
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
