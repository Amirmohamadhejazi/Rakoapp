import axios from "axios";

const ServerConst = (props) => {
    axios.defaults.baseURL = 'https://api.rakoapp.ir'

}


export default ServerConst;
