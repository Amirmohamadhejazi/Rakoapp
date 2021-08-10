import axios from "axios";

const instance = axios.create({
    baseURL:'https://api.rakoapp.ir',


})


export default instance;