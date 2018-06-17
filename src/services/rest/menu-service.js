import * as httpService from "@/services/rest/core/http-service";

const BASE_URI = 'http://localhost:50096/api/v1/Menus';

export const getMenus = () => httpService.get(BASE_URI);
export const createMenu = (menu) => httpService.post(BASE_URI, menu);
export const updateMenus = (menu) => httpService.put(BASE_URI + '/' + menu.id, menu);
export const removeMenu = (id) => httpService.remove(BASE_URI + '/' + id);
export const getActiveMenu = () => httpService.get()
export const getMenuDays = (id) => httpService.get(`${BASE_URI}/${id}/Days`)