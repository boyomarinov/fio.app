import * as httpService from './http-service';

export class CrudService {
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
}

