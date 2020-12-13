import React, { useEffect, useState } from "react";

import { getProfileById } from "../../actions/userAction";
import { connect } from "react-redux";
import { SITE_RED } from "../../styles/colors";
import { H3, P1, P1Bold, Title } from "../../styles/typeStyles";
import {
  StyledButton,
  UnorderedList,
  StyledButtonLink,
  ListItem,
  StyledSecondaryButton,
} from "../../styles/globalElements";
import Nav from "../nav/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { StyledLink } from "../nav/styled";

const Profile = ({ searchProfile, getProfileById, profile, ...props }) => {
  let userProfile = profile;
  let profileId = parseInt(props.match.params.profileId);

  const [isMyProfile, setIsMyProfile] = useState(false);

  useEffect(() => {
    if (profileId !== profile.id) {
      getProfileById(profileId);
    } else {
      userProfile = profile;
      setIsMyProfile(true);
    }
  }, [profileId]);

  if (profileId !== profile.id) {
    userProfile = searchProfile;
  }

  return (
    <div className="container">
      <Nav />
      <div>
        <Title className="mb-4" static>
          {userProfile.userType}
        </Title>
        <div className="col-12 mb-5">
          <H3>
            {userProfile.firstName} {userProfile.lastName}
          </H3>
          <P1>@{userProfile.username}</P1>
        </div>
        <div className="d-block d-sm-flex">
          {userProfile.userType === "BARTENDER" && (
            <div className="col-12 col-sm-3">
              <P1Bold color={SITE_RED}>Created Recipes</P1Bold>
              <UnorderedList>
                {userProfile.createdDrinks &&
                  userProfile.createdDrinks.map((recipe, i) => {
                    return (
                      <ListItem key={i}>
                        <li>
                          <StyledLink to={`/${recipe.drinkId}`}><P1>{recipe.drinkName}</P1></StyledLink>
                        </li>
                        {isMyProfile && (
                          <Link to={`/recipeForm/${recipe.drinkId}`}>
                            <FontAwesomeIcon
                              icon={faPencilAlt}
                              className="float-right"
                            />
                          </Link>
                        )}
                      </ListItem>
                    );
                  })}
              </UnorderedList>
            </div>
          )}
          <div className="col-12 col-md-4 col-lg-3">
            <P1Bold color={SITE_RED}>Favorites</P1Bold>
            <UnorderedList>
              {userProfile.likedDrinks &&
                userProfile.likedDrinks.map((favorite, i) => {
                  return (
                    <li key={i}>
                      <StyledLink to={`/${favorite.drinkId}`}><P1>{favorite.drinkName}</P1></StyledLink>
                    </li>
                  );
                })}
            </UnorderedList>
          </div>
        </div>
        {userProfile.userType === "BARTENDER" && isMyProfile ? (
          <StyledButtonLink to="/recipeForm">
            <StyledButton className="col-12 col-md-3 col-lg-2 py-3 my-5">
              Create Recipe
            </StyledButton>
          </StyledButtonLink>
        ) : (
          <></>
        )}
        {isMyProfile && (
          <div className="d-block">
            <StyledButtonLink to="/editProfile">
              <StyledSecondaryButton className="col-12 col-md-3 col-lg-2 py-3">
                Manage account
              </StyledSecondaryButton>
            </StyledButtonLink>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  profile: state.userReducer.profile,
  searchProfile: state.userReducer.searchProfile,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileById: (userId) => getProfileById(dispatch, userId),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
