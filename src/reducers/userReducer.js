import { profile } from '../services/userService';

const initialState = {
    profile: {
        createdDrinks: [],
    },
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_DRINK':
            return {
                ...state,
                profile: Object.assign({}, state.profile, {
                    createdDrinks: [...state.profile.createdDrinks, action.newDrink],
                }),
            };
        case 'UPDATE_DRINK':
            return {
                ...state,
                profile: Object.assign({}, state.profile, {
                    createdDrinks: state.profile.createdDrinks.map((drinks) =>
                        drinks.drinkId === action.updatedDrink.drinkId
                            ? action.updatedDrink
                            : drinks,
                    ),
                }),
            };
        case 'DELETE_DRINK':
            return {
                ...state,
                profile: Object.assign({}, state.profile, {
                    createdDrinks: state.profile.createdDrinks.filter(
                        (drinks) => drinks.drinkId !== action.drinkId,
                    ),
                }),
            };
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
