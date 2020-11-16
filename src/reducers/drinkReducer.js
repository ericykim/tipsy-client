const initialState = {
    drinks: [],
    isLoading: false,
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};

export default courseReducer;
