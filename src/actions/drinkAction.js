import drinkService from '../services/drinkService';

export const SEARCH_DRINK_BY_NAME = 'SEARCH_DRINK_BY_NAME';
export const FETCH_DRINK_LOADING = 'FETCH_DRINK_LOADING';

export const fetchDrinkLoading = (loading) => {
    return {
        type: FETCH_DRINK_LOADING,
        isLoading: loading,
    };
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
