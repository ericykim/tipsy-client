import React, { useEffect } from 'react';

import { logoutUser, getProfile } from '../../actions/userAction';
import { connect } from 'react-redux';

const Profile = ({ logoutUser, getProfile, profile }) => {
    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className='container'>
            Profile
            <p>Name: {`${profile.firstName} ${profile.lastName}`}</p>
            <button onClick={() => logoutUser()}>logout</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    profile: state.userReducer.profile,
});

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => logoutUser(dispatch),
        getProfile: () => getProfile(dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
