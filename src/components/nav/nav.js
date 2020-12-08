import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/SVG/logo.svg";
import { Logo, LogoContainer } from "../../styles/globalElements";
import { P1 } from "../../styles/typeStyles";
import { NavButton, Pages, StyledLink } from "./styled";
import { logoutUser } from "../../actions/userAction";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Nav = ({ logoutUser, profile }) => {
  const loggedIn = profile.username;
  const history = useHistory();

  const logout = () => {
    logoutUser();
    history.push("/");
  };
  return (
    <div className="row justify-content-between my-4">
      <div className="col-4"></div>
      <LogoContainer className="col-4">
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <Pages className="col-4">
        {loggedIn ? (
          <>
            <NavButton onClick={() => logout()}>
              <P1>Logout</P1>
            </NavButton>
            <StyledLink to="/profile" className="mr-3">
              <P1>Profile</P1>
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink to="/signup">
              <P1>Sign up</P1>
            </StyledLink>
            <StyledLink to="/login" className="mr-3">
              <P1>Log in</P1>
            </StyledLink>
          </>
        )}
      </Pages>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  profile: state.userReducer.profile,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => logoutUser(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
