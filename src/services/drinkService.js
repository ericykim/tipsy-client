import wretch from 'wretch';

// const url = 'https://d2sdzmhgzh0p5f.cloudfront.net';
const url = 'http://localhost:5000';
// const url = 'https://tipsy.buzz';

export const searchDrinkByName = (q, o, l) => {
    const queryParams = {
        drinkName: q,
        offset: o ? o : 0,
        limit: l ? l : 10,
    };
    return wretch(`${url}/api/v1/drinks/search`).query(queryParams).get().json();
};

export const getDrinkById = (drinkId) => {
    const dId = parseInt(drinkId)
    return wretch(`${url}/api/v1/drinks/${dId}`).get().json();
};

export const createDrink = (userId, drink) => {
    return wretch(`${url}/api/v1/users/${userId}/createdDrinks`).json(drink).post().json();
};

export const updateDrink = (userId, drinkId, drink) => {
    const dId = parseInt(drinkId)
    return wretch(`${url}/api/v1/users/${userId}/createdDrinks/${dId}`).json(drink).put().json();
};

export const deleteDrink = (userId, drinkId) => {
    const dId = parseInt(drinkId)
    return wretch(`${url}/api/v1/users/${userId}/drinks/${dId}`).delete().json;
};


export default { searchDrinkByName, getDrinkById, createDrink, updateDrink, deleteDrink };
