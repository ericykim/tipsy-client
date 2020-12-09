import userService from '../services/userService';
import history from '../history';

export const REGISTER_USER = 'REGISTER_USER';
export const GET_PROFILE = 'GET_PROFILE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CREATE_DRINK = 'CREATE_DRINK';
export const UPDATE_DRINK = 'UPDATE_DRINK';
export const DELETE_DRINK = 'DELETE_DRINK';
export const LIKE_DRINK = 'LIKE_DRINK';
export const UNLIKE_DRINK = 'UNLIKE_DRINK';

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

export const createDrink = (dispatch, userId, drink) => {
    userService.createDrink(userId, drink).then((createdDrink) => {
        dispatch({
            type: CREATE_DRINK,
            newDrink: createdDrink,
        });
        history.push(`/${createdDrink.drinkId}`);
    });
};

export const updateDrink = (dispatch, userId, drinkId, drink) => {
    userService.updateDrink(userId, drinkId, drink).then((updatedDrink) => {
        dispatch({
            type: UPDATE_DRINK,
            updatedDrink: updatedDrink,
        });
        history.push(`/${updatedDrink.drinkId}`);
    });
};

export const deleteDrink = (dispatch, userId, drinkId) => {
    userService.deleteDrink(userId, drinkId).then((status) => {
        dispatch({
            type: DELETE_DRINK,
            drinkId: drinkId,
        });
        history.push('/deleted');
    });
};

export const likeDrink = (dispatch, userId, drink) => {
    userService.likeDrink(userId, drink).then((drink) => {
        dispatch({
            type: LIKE_DRINK,
            drink: drink,
        });
    });
};

export const unlikeDrink = (dispatch, userId, drinkId) => {
    userService.unlikeDrink(userId, drinkId).then((status) => {
        dispatch({
            type: UNLIKE_DRINK,
            drinkId: drinkId,
        });
    });
};
