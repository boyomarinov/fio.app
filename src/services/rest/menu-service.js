import * as httpService from "@/services/rest/core/http-service";

const BASE_URI = 'http://localhost:50096/api/v1/Menus',
    BASE_SMALLER_CASE_URI = 'http://localhost:50096/api/v1/menus';

export const getMenus = () => httpService.get(BASE_URI);
export const createMenu = (menu) => httpService.post(BASE_URI, menu);
export const updateMenus = (menu) => httpService.put(BASE_URI + '/' + menu.id, menu);
export const removeMenu = (id) => httpService.remove(BASE_URI + '/' + id);
export async function getActiveMenu() {
    const activeMenu = await httpService.get(BASE_URI + '/active'),
        firstActive = activeMenu && activeMenu.length ? activeMenu[activeMenu.length - 1] : activeMenu[0];

    firstActive.days = await httpService.get(`${BASE_SMALLER_CASE_URI}/${firstActive.id}/days`);
    return firstActive;
}
export const getMenuDays = (id) => httpService.get(`${BASE_URI}/${id}/Days`);
