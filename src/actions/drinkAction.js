import drinkService from '../services/drinkService';

export const SEARCH_DRINK_BY_NAME = 'SEARCH_DRINK_BY_NAME';
export const FETCH_DRINK_LOADING = 'FETCH_DRINK_LOADING';
export const GET_DRINK_BY_ID = 'GET_DRINK_BY_ID';
export const CLEAR_DRINK_SEARCH = 'CLEAR_DRINK_SEARCH';

export const fetchDrinkLoading = (loading) => {
    return {
        type: FETCH_DRINK_LOADING,
        isLoading: loading,
    };
};

export const clearDrinkSearch = (dispatch) => {
    dispatch({ type: CLEAR_DRINK_SEARCH });
};

export const searchDrinkByName = (dispatch, drinkName, offset, limit) => {
    let isLoading = true;
    dispatch(fetchDrinkLoading(isLoading));
    drinkService
        .searchDrinkByName(drinkName, offset, limit)
        .then((drinks) => {
            dispatch({
                type: SEARCH_DRINK_BY_NAME,
                drinks: drinks,
            });
        })
        .finally(() => {
            isLoading = false;
            dispatch(fetchDrinkLoading(isLoading));
        });
};

export const getDrinkById = (dispatch, drinkId) => {
    let isLoading = true;
    dispatch(fetchDrinkLoading(isLoading));
    drinkService
        .getDrinkById(drinkId)
        .then((selectedDrink) => {
            dispatch({
                type: GET_DRINK_BY_ID,
                selectedDrink: selectedDrink,
            });
        })
        .finally(() => {
            isLoading = false;
            dispatch(fetchDrinkLoading(isLoading));
        });
};
