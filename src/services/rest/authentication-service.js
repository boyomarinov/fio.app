import { post } from './core/http-service';

export const login = (login, password) => {
    return {
        user: {
            name: login
        },
        token: 'token'
    };
    // return post('authentication/login', {
    //     login: login,
    //     password: password
    // });
};
