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

const Signup = () => {
  const [selectState, setSelectState] = useState("BARTENDER");

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
          <label for="userSelect">
            <P1 className="mb-0">who you are</P1>
          </label>
          <StyledSelect
            className="form-control col-12 mb-3"
            onChange={(e) => setSelectState(e.target.value)}
          >
            <option value="BARTENDER" defaultValue>
              bartender
            </option>
            <option value="CONNOISSEUR">connoisseur</option>
          </StyledSelect>
          {selectState === "BARTENDER" ? (
            <>
              <label for="workplace">
                <P1 className="mb-0">where do you work</P1>
              </label>
              <FormInput
                className=" form-control col-12 mb-3"
                id="username"
                placeholder=""
                type="text"
              />
            </>
          ) : (
            <>
              <label for="favDrink">
                <P1 className="mb-0">favorite drink</P1>
              </label>
              <FormInput
                className=" form-control col-12 mb-3"
                id="username"
                placeholder=""
                type="text"
              />
            </>
          )}

          <StyledButton className="btn btn-success my-3">
            <P1>sign up</P1>
          </StyledButton>
          <SmallText>
            If you are already a member, log in <Link to="/login">here</Link>
          </SmallText>
        </div>
      </div>
    </div>
  );
};

export default Signup;
