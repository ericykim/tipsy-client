import { UPDATE_USER } from "../actions/userAction";
import { profile } from "../services/userService";

const initialState = {
  profile: {
    createdDrinks: [],
    likedDrinks: [],
  },
  searchProfile: {},
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        profile: action.profile,
      };
    case "DELETE_USER":
      return {
        ...state,
        profile: {},
      };
    case "CREATE_DRINK":
      return {
        ...state,
        profile: Object.assign({}, state.profile, {
          createdDrinks: [...state.profile.createdDrinks, action.newDrink],
        }),
      };
    case "UPDATE_DRINK":
      return {
        ...state,
        profile: Object.assign({}, state.profile, {
          createdDrinks: state.profile.createdDrinks.map((drinks) =>
            drinks.drinkId === action.updatedDrink.drinkId
              ? action.updatedDrink
              : drinks
          ),
        }),
      };
    case "DELETE_DRINK":
      return {
        ...state,
        profile: Object.assign({}, state.profile, {
          createdDrinks: state.profile.createdDrinks.filter(
            (drinks) => drinks.drinkId !== action.drinkId
          ),
        }),
      };
    case "LIKE_DRINK":
      return {
        ...state,
        profile: Object.assign({}, state.profile, {
          likedDrinks: [...state.profile.likedDrinks, action.drink],
        }),
      };
    case "UNLIKE_DRINK":
      return {
        ...state,
        profile: Object.assign({}, state.profile, {
          likedDrinks: state.profile.likedDrinks.filter(
            (drinks) => drinks.drinkId !== action.drinkId
          ),
        }),
      };
    case "GET_PROFILE_BY_ID":
      return {
        ...state,
        searchProfile: action.profile,
      };
    case "REGISTER_USER":
    case "GET_PROFILE":
    case "LOGIN_USER":
      return {
        ...state,
        profile: action.profile,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        profile: {},
      };
    default:
      return state;
  }
};

export default courseReducer;
