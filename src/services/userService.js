import wretch from 'wretch';

// const url = 'https://d2sdzmhgzh0p5f.cloudfront.net';
const url = 'http://localhost:5000';
// const url = 'https://tipsy.buzz';

export const logout = (user) => {
    return wretch(`${url}/api/v1/users/logout`).options({ credentials: 'include' }).get().res();
};

export const login = (user) => {
    return wretch(`${url}/api/v1/users/login`)
        .options({ credentials: 'include' })
        .post(user)
        .json();
};

export const profile = () => {
    return wretch(`${url}/api/v1/users/profile`)
        .options({ credentials: 'include' })
        .post()
        .res((response) => {
            let contentType = response.headers.get('content-type');
            return !contentType || !contentType.includes('application/json') ? {} : response.json();
        });
};

export const registerUser = (user) => {
    return wretch(`${url}/api/v1/users/register`)
        .options({ credentials: 'include' })
        .post(user)
        .json();
};

export const createDrink = (userId, drink) => {
    return wretch(`${url}/api/v1/users/${userId}/createdDrinks`).json(drink).post().json();
};

export const updateDrink = (userId, drinkId, drink) => {
    const dId = parseInt(drinkId);
    return wretch(`${url}/api/v1/users/${userId}/createdDrinks/${dId}`).json(drink).put().json();
};

export const deleteDrink = (userId, drinkId) => {
    const dId = parseInt(drinkId);
    return wretch(`${url}/api/v1/users/${userId}/createdDrinks/${dId}`).delete().res();
};

export const likedDrinks = (userId, drink) => {
    return wretch(`${url}/api/v1/users/${userId}/likedDrinks`).get().json();
};

export const likeDrink = (userId, drink) => {
    return wretch(`${url}/api/v1/users/${userId}/likedDrinks`).json(drink).post().json();
};

export const unlikeDrink = (userId, drinkId) => {
    const dId = parseInt(drinkId);
    return wretch(`${url}/api/v1/users/${userId}/likedDrinks/${dId}`).delete().res();
};

export default {
    registerUser,
    profile,
    login,
    logout,
    createDrink,
    updateDrink,
    deleteDrink,
    likedDrinks,
    unlikeDrink,
    likeDrink,
};
