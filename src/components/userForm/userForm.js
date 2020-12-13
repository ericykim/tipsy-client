import React, { useEffect, useState } from "react";
import { P1, SmallText } from "../../styles/typeStyles";
import { Link } from "react-router-dom";
import {
  FormInput,
  StyledButton,
  StyledSelect
} from "../../styles/globalElements";
import history from "../../history";
import { connect } from "react-redux";
import { getProfile, logoutUser, registerUser, updateUser, deleteUser } from "../../actions/userAction";
import { StyledLink } from "../nav/styled";

const UserForm = ({ profile, registerUser, updateUser, deleteUser }) => {

  const [userType, setUserType] = useState("BARTENDER");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  useEffect(() => {
    if (profile.id) {
      setFirstName(profile.firstName);
      setLastName(profile.lastName);
      setUsername(profile.username);
      setEmail(profile.email);
      setPassword(profile.password);
    }
  }, []);

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
    registerUser(user);
    history.push("/");
  };

  const update = () => {
    const updatedUser = {
      ...profile,
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
    };
    updateUser(profile.id, updatedUser);
    history.push(`/profile/${profile.id}`)
  };

  const deletedUser = () => {
    // deleteUser(profile.id)
    // history.push('/deleted')
    console.log('delete userId: ', profile.id)
  };

  return (
    <div className="row justify-content-center align-items-center">
      <div className="column col-12 col-md-8 col-lg-6  my-5">
        <div className="d-flex justify-content-between">
          <div className="col-6 pl-0 pr-2">
            <label>
              <P1 className="mb-0">First Name</P1>
            </label>
            <FormInput
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="form-control col-12 mb-3"
              id="firstName"
              placeholder=""
              type="text"
            />
          </div>
          <div className="col-6 pl-2 pr-0">
            <label>
              <P1 className="mb-0">Last Name</P1>
            </label>
            <FormInput
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="form-control  col-12 mb-3"
              id="lastname"
              placeholder=""
              type="text"
            />
          </div>
        </div>
        <label>
          <P1 className="mb-0">Email</P1>
        </label>
        <FormInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="form-control col-12 mb-3"
          id="email"
          placeholder=""
          type="email"
        />
        <label>
          <P1 className="mb-0">Username</P1>
        </label>
        <FormInput
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="form-control col-12 mb-3"
          id="username"
          placeholder=""
          type="text"
        />
        <div className="d-flex justify-content-between">
          <div className="col-6 pl-0 pr-2">
            <label>
              <P1 className="mb-0">Password</P1>
            </label>
            <FormInput
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className=" form-control col-12 mb-3"
              id="password"
              placeholder=""
              type="password"
            />
          </div>
          {!profile.id && (
            <div className="col-6 pl-2 pr-0">
              <label>
                <P1 className="mb-0">Verify Password</P1>
              </label>
              <FormInput
                value={verifyPassword}
                onChange={(event) => setVerifyPassword(event.target.value)}
                className=" form-control col-12 mb-3"
                id="verifyPassword"
                placeholder=""
                type="password"
              />
            </div>
          )}
        </div>
        {!profile.id && (
          <>
            <label>
              <P1 className="mb-0">Who You Are</P1>
            </label>
            <StyledSelect
              className="form-control col-12 mb-3"
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="BARTENDER" defaultValue>
                bartender
              </option>
              <option value="CONNOISSEUR">connoisseur</option>
            </StyledSelect>
          </>
        )}
        {profile.id ? (
          <>
            <StyledButton
              className="btn btn-block mt-4 mb-2"
              onClick={() => update()}
            >
              update
            </StyledButton>
            {/* <StyledSecondaryButton
              className="btn btn-block my-4 mb-2"
              onClick={() => deletedUser()}
            >
              delete
            </StyledSecondaryButton> */}
            <StyledLink to={`/profile/${profile.id}`}>Back to profile</StyledLink>
          </>
        ) : (
          <>
            <StyledButton
              className="btn btn-block mt-4 mb-2"
              onClick={() => register()}
            >
              <P1>sign up</P1>
            </StyledButton>
            <SmallText>
              If you are already a member, log in <Link to="/login">here</Link>
            </SmallText>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  profile: state.userReducer.profile,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile: () => getProfile(dispatch),
    logoutUser: () => logoutUser(dispatch),
    registerUser: (user) => registerUser(dispatch, user),
    updateUser: (userId, user) => updateUser(dispatch, userId, user),
    deleteUser: (userId) => deleteUser(dispatch, userId)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
