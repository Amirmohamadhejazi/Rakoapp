import axios from "axios";
export const baseURL='https://api.rakoapp.ir'

const api = axios.create({
    baseURL
})
api.interceptors.request.use(function (config) {
    // const token = (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).token) ?
    //
    //     JSON.parse(localStorage.getItem('token')).token : null;
    let headers= {
        authorization: 'Token 9915e8b5f140baa3b79c213bbda1060a57d43797',
            'Content-Type': 'application/json'
    }

     // config.headers.Authorization = `${token}`;
        config.headers = headers;

    return config;
});



export default api;