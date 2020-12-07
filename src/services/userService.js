import wretch from 'wretch';

// const url = 'https://d2sdzmhgzh0p5f.cloudfront.net';
// const url = 'http://localhost:5000';
const url = 'https://tipsy.buzz';

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

export default { registerUser, profile, login, logout };
