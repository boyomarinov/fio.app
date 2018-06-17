import * as httpService from "@/services/rest/core/http-service";

const BASE_URI = 'http://localhost:50096/api/v1/resources';

export const saveFile = (file) => httpService.postFile(`${BASE_URI}/files`, file)