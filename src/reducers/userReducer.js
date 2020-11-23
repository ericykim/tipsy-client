const initialState = {
    profile: {},
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_USER':
        case 'GET_PROFILE':
        case 'LOGIN_USER':
            return {
                ...state,
                profile: action.profile,
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                profile: {},
            };
        default:
            return state;
    }
};

export default courseReducer;
