import * as httpService from "@/services/rest/core/http-service";

const sampleMenu = {
    id: 1,
    active: true,
    days: [
        {
            id: 1,
            date: '2018-06-11T17:50:16.706Z',
            meals: [
                { id: 1, name: 'Meal 1', description: 'Meal1 Desc' },
                { id: 2, name: 'Meal 2', description: 'Meal2 Desc' },
                { id: 3, name: 'Meal 3', description: 'Meal3 Desc' },
                { id: 4, name: 'Meal 4', description: 'Meal4 Desc' },
                { id: 5, name: 'Meal 5', description: 'Meal5 Desc' },
                { id: 6, name: 'Meal 6', description: 'Meal6 Desc' },
            ]
        }, {
            id: 2,
            date: '2018-06-12T17:50:16.706Z',
            meals: [
                { id: 1, name: 'Meal 1', description: 'Meal1 Desc' },
                { id: 2, name: 'Meal 2', description: 'Meal2 Desc' },
                { id: 3, name: 'Meal 3', description: 'Meal3 Desc' },
                { id: 4, name: 'Meal 4', description: 'Meal4 Desc' },
                { id: 5, name: 'Meal 5', description: 'Meal5 Desc' },
                { id: 6, name: 'Meal 6', description: 'Meal6 Desc' },
            ]
        }, {
            id: 3,
            date: '2018-06-13T17:50:16.706Z',
            meals: [
                { id: 1, name: 'Meal 1', description: 'Meal1 Desc' },
                { id: 2, name: 'Meal 2', description: 'Meal2 Desc' },
                { id: 3, name: 'Meal 3', description: 'Meal3 Desc' },
                { id: 4, name: 'Meal 4', description: 'Meal4 Desc' },
                { id: 5, name: 'Meal 5', description: 'Meal5 Desc' },
                { id: 6, name: 'Meal 6', description: 'Meal6 Desc' },
            ]
        }, {
            id: 4,
            date: '2018-06-14T17:50:16.706Z',
            meals: [
                { id: 1, name: 'Meal 1', description: 'Meal1 Desc' },
                { id: 2, name: 'Meal 2', description: 'Meal2 Desc' },
                { id: 3, name: 'Meal 3', description: 'Meal3 Desc' },
                { id: 4, name: 'Meal 4', description: 'Meal4 Desc' },
                { id: 5, name: 'Meal 5', description: 'Meal5 Desc' },
                { id: 6, name: 'Meal 6', description: 'Meal6 Desc' },
            ]
        }, {
            id: 5,
            date: '2018-06-15T17:50:16.706Z',
            meals: [
                { id: 1, name: 'Meal 1', description: 'Meal1 Desc' },
                { id: 2, name: 'Meal 2', description: 'Meal2 Desc' },
                { id: 3, name: 'Meal 3', description: 'Meal3 Desc' },
                { id: 4, name: 'Meal 4', description: 'Meal4 Desc' },
                { id: 5, name: 'Meal 5', description: 'Meal5 Desc' },
                { id: 6, name: 'Meal 6', description: 'Meal6 Desc' },
            ]
        }
    ]
};

export class MenuService {
    constructor(uri) {
        this.uri = uri;
    }

    getList() {
        return sampleMenu;
        //return httpService.get(this.uri);
    }

    getOne(id) {
        return httpService.get(`${this.uri}/${id}`);
    }

    create(json) {
        return httpService.post(this.uri, json);
    }

    remove(id) {
        return httpService.remove(`${this.uri}/${id}`);
    }

    getCurrent() {
        return httpService.get(`${this.uri}/current`)
    }

    getActive() {
        return sampleMenu;
        //return httpService.get(`${this.uri}/active`)
    }
}

export const menuService = new MenuService('/v1/Menus');
