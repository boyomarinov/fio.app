import { post } from './core/http-service';

export const login = (login, password) => {
    return {
        user: {
            id: 1,
            name: login,
            role: login === 'admin' ? 'admin' : 'user'
        },
        token: 'token'
    };
    // return post('authentication/login', {
    //     login: login,
    //     password: password
    // });
};
