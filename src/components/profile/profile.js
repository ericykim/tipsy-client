import React, { useEffect } from 'react';

import { getProfileById } from '../../actions/userAction';
import { connect } from 'react-redux';
import { SITE_RED } from '../../styles/colors';
import { H3, P1, P1Bold, Title } from '../../styles/typeStyles';
import {
    StyledButton,
    UnorderedList,
    StyledButtonLink,
    ListItem,
} from '../../styles/globalElements';
import Nav from '../nav/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Profile = ({ searchProfile, getProfileById, profile, ...props }) => {
    let userProfile = profile;
    const profileId = props.match.params.profileId;

    useEffect(() => {
        if (profileId != profile.id) {
            getProfileById(profileId);
        } else {
            userProfile = profile;
        }
    }, [profileId]);

    if (profileId != profile.id) {
        userProfile = searchProfile;
    }
    return (
        <div className='container'>
            <Nav />
            <div>
                <Title className='mb-4' static>
                    {userProfile.userType}
                </Title>
                <div className='col-12 mb-5'>
                    <H3>
                        {userProfile.firstName} {userProfile.lastName}
                    </H3>
                </div>
                <div className='d-block d-sm-flex'>
                    {userProfile.userType === 'BARTENDER' && (
                        <div className='col-12 col-sm-3'>
                            <P1Bold color={SITE_RED}>Created Recipes</P1Bold>
                            <UnorderedList>
                                {userProfile.createdDrinks &&
                                    userProfile.createdDrinks.map((recipe, i) => {
                                        return (
                                            <ListItem key={i}>
                                                <li>
                                                    <P1>{recipe.drinkName}</P1>
                                                </li>
                                                <Link to={`/recipeForm/${recipe.drinkId}`}>
                                                    <FontAwesomeIcon
                                                        icon={faPencilAlt}
                                                        className='float-right'
                                                    />
                                                </Link>
                                            </ListItem>
                                        );
                                    })}
                            </UnorderedList>
                        </div>
                    )}
                    <div className='col-12 col-sm-3'>
                        <P1Bold color={SITE_RED}>Favorites</P1Bold>
                        <UnorderedList>
                            {userProfile.likedDrinks &&
                                userProfile.likedDrinks.map((favorite, i) => {
                                    return (
                                        <li key={i}>
                                            <P1>{favorite.drinkName}</P1>
                                        </li>
                                    );
                                })}
                        </UnorderedList>
                    </div>
                </div>
                {userProfile.userType === 'BARTENDER' ? (
                    <StyledButton className='col-2 py-3'>
                        <StyledButtonLink to='/recipeForm'>Create Recipe</StyledButtonLink>
                    </StyledButton>
                ) : (
                    <></>
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
        // getProfile: () => getProfile(dispatch),
        getProfileById: (userId) => getProfileById(dispatch, userId),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
