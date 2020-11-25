import userService from '../services/userService';

export const REGISTER_USER = 'REGISTER_USER';
export const GET_PROFILE = 'GET_PROFILE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const registerUser = (dispatch, user) => {
    userService.registerUser(user).then((profile) => {
        dispatch({
            type: REGISTER_USER,
            profile: profile,
        });
    });
};

export const getProfile = (dispatch) => {
    userService.profile().then((profile) => {
        dispatch({
            type: GET_PROFILE,
            profile: profile,
        });
    });
};

export const loginUser = (dispatch, user) => {
    userService.login(user).then((profile) => {
        dispatch({
            type: LOGIN_USER,
            profile: profile,
        });
    });
};

export const logoutUser = (dispatch) => {
    userService.logout().then((res) => {
        if (res.status === 200) {
            dispatch({
                type: LOGOUT_USER,
            });
        }
    });
};
