import Vue from 'vue';

const returnBody = res => res.body;

export const get = (uri) => {
    return Vue.http.get(uri).then(returnBody);
};
    
export const post = (uri, json) => {
    return Vue.http.post(uri, json).then(returnBody);
};

export const postFile = (uri, file) => {
    const formData = new FormData();
    formData.append('image', file, file.name);
    return Vue.http
        .post(uri, formData, { 
            headers: { 
                'Content-Type': 'multipart/form-data' } 
            }
        )
        .then(returnBody);
}

export const put = (uri, json) => {
    return Vue.http.put(uri, json).then(returnBody);
}

export const remove = (uri) => {
    return Vue.http.delete(uri);
};
