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

import moment from 'moment';

const BASE_MENU_URI = 'http://localhost:50096/api/v1/Menus',
    BASE_DAY_URI = 'http://localhost:50096/api/v1/Days';

export async function getActiveMenu() {
    return sampleMenu;

    const menu = await httpService.get(`${BASE_MENU_URI}/active`);
    const days = await httpService.get(`${BASE_MENU_URI}/${menu[0].id}/days`);
    menu[0].days = days;

    let promiseList = [];
    days.forEach((day) => {
        const id = moment(day.date).format('YYYY-MM-DD');
        promiseList.push(httpService.get(`${BASE_DAY_URI}/${id}/meals`));
    });

    let daysMails = await Promise.all(promiseList);
    console.log(daysMails);
    for (let i = 0; i < days.length; i++) {
        days[i].meals = daysMails[i];
    }
}
