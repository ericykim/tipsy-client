const initialState = {
    drinks: [],
    isLoading: false,
    selectedDrink: {},
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DRINK_BY_ID':
            return {
                ...state,
                selectedDrink: action.selectedDrink,
            };
        case 'SEARCH_DRINK_BY_NAME':
            return {
                ...state,
                drinks: Array.isArray(action.drinks) ? action.drinks : [action.drinks],
            };
        case 'FETCH_DRINK_LOADING':
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case 'CLEAR_DRINK_SEARCH':
            return {
                ...state,
                drinks: [],
            };
        default:
            return state;
    }
};

export default courseReducer;
