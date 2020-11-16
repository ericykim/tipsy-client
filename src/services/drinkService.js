import wretch from 'wretch';

const url = 'http://localhost:5000';

export const searchDrinkByName = (q, o, l) => {
    const queryParams = {
        drinkName: q,
        offset: o ? o : 0,
        limit: l ? l : 10,
    };

    return wretch(`${url}/api/v1/drinks/search`).query(queryParams).get().json();
};

export default { searchDrinkByName };
