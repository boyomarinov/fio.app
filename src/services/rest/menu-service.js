import * as httpService from "@/services/rest/core/http-service";

export class MenuService {
    constructor(uri) {
        this.uri = uri;
    }

    getList() {
        return httpService.get(this.uri);
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
        return httpService.get(`${this.uri}/active`)
    }
}

export const menuService = new MenuService('./api/v1/Menus');
