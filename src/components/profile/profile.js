import React, { useEffect } from "react";

import { getProfile } from "../../actions/userAction";
import { connect } from "react-redux";
import { SITE_RED } from "../../styles/colors";
import { H3, P1, P1Bold, Title } from "../../styles/typeStyles";
import {
  StyledButton,
  UnorderedList,
  StyledButtonLink,
  ListItem,
} from "../../styles/globalElements";
import Nav from "../nav/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { StyledLink } from "../nav/styled";

const Profile = ({ getProfile, profile }) => {
  useEffect(() => {
    // getProfile();
  }, [getProfile]);

  return (
    <div className="container">
      <Nav />
      <div>
        <Title className="mb-4" static>
          {profile.userType}
        </Title>
        <div className="col-12 mb-5">
          <H3>
            {profile.firstName} {profile.lastName}
          </H3>
        </div>
        <div className="d-block d-md-flex">
          {profile.userType === "BARTENDER" && (
            <div className="col-12 col-md-4 col-lg-3">
              <P1Bold color={SITE_RED}>Created Recipes</P1Bold>
              <UnorderedList>
                {profile.createdDrinks &&
                  profile.createdDrinks.map((recipe, i) => {
                    return (
                      <ListItem key={i}>
                        <li>
                          <P1>{recipe.drinkName}</P1>
                        </li>
                        <Link to={`/recipeForm/${recipe.drinkId}`}>
                          <FontAwesomeIcon
                            icon={faPencilAlt}
                            className="float-right"
                          />
                        </Link>
                      </ListItem>
                    );
                  })}
              </UnorderedList>
            </div>
          )}
          <div className="col-12 col-md-4 col-lg-3" >
            <P1Bold color={SITE_RED}>Favorites</P1Bold>
            <UnorderedList>
              {profile.likedDrinks &&
                profile.likedDrinks.map((favorite, i) => {
                  return (
                    <li key={i}>
                      <P1>{favorite.drinkName}</P1>
                    </li>
                  );
                })}
            </UnorderedList>
          </div>
        </div>
        {profile.userType === "BARTENDER" ? (
          <StyledButtonLink to="/recipeForm" >
            <StyledButton className="col-12 col-md-3 col-lg-2 py-3 my-5">Create Recipe</StyledButton>
          </StyledButtonLink>
        ) : (
          <></>
        )}
        <div className="d-block">
        <StyledLink to="/editProfile">
            Manage account
        </StyledLink>
        </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
