import { post } from './core/http-service';

export const login = (login, password) => {
    return post('authentication/login', {
        login: login,
        password: password
    });
};
