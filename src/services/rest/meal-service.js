import * as httpService from './core/http-service';

const BASE_URI = 'http://localhost:50096/api/v1/Meals';

export const getMeals = () => httpService.get(BASE_URI);
export const createMeal = (meal) => httpService.post(BASE_URI, meal);
export const removeMeal = (id) => httpService.remove(BASE_URI + '/' + id);