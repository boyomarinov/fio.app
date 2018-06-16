import * as httpService from './core/http-service';

const BASE_URI = 'http://localhost:50096/api/v1/Days';

export const getDays = () => httpService.get(BASE_URI);
export const createDay = (day) => httpService.post(BASE_URI, day);
export const removeDay = (date) => httpService.remove(BASE_URI + '/' + date);