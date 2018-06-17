import * as httpService from './core/http-service';

const BASE_URI = 'http://localhost:50096/api/v1/Orders';

export const getOrders = () => httpService.get(BASE_URI);
export const createOrder = (order) => httpService.post(BASE_URI, order);
export const updateOrder = (order) => httpService.put(BASE_URI + '/' + order.id, order);
export const removeOrder = (id) => httpService.remove(BASE_URI + '/' + id);
