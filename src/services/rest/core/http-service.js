import Vue from 'vue';

const returnBody = res => res.body;

export const get = (uri) => {
    return Vue.http.get(uri).then(returnBody);
};
    
export const post = (uri, json) => {
    return Vue.http.post(uri, json).then(returnBody);
};

export const remove = (uri) => {
    return Vue.http.delete(uri);
};
