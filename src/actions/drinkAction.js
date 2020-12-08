import drinkService from '../services/drinkService';

export const SEARCH_DRINK_BY_NAME = 'SEARCH_DRINK_BY_NAME';
export const FETCH_DRINK_LOADING = 'FETCH_DRINK_LOADING';
export const GET_DRINK_BY_ID = 'GET_DRINK_BY_ID';
export const CREATE_DRINK = 'CREATE_DRINK';
export const UPDATE_DRINK = 'UPDATE_DRINK';
export const DELETE_DRINK = 'DELETE_DRINK';



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

export const createDrink = (dispatch, userId, drink) => {
    drinkService
        .createDrink(userId, drink)
        .then((createdDrink) => {
            dispatch({
                type: CREATE_DRINK,
                newDrink: createdDrink,
            });
        })
};


export const updateDrink = (dispatch, userId, drink, drinkId) => {
    drinkService
        .updateDrink(userId, drinkId, drink)
        .then((updatedDrink) => {
            dispatch({
                type: UPDATE_DRINK,
                updatedDrink: updatedDrink,
            });
        })
};

export const deleteDrink = (dispatch, userId, drinkId) => {
    drinkService
        .deleteDrink(userId, drinkId)
        .then((status) => {
            dispatch({
                type: DELETE_DRINK
            });
        })
};
