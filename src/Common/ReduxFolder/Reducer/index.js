import { combineReducers}from 'redux'

import {Login} from './Login'
import {CounterReducer} from "./CounterReducer";

import {loading} from "./SearchUser/loading";
import {ApiData} from "./SearchUser/ApiData";
import {ModalSearchUser} from "./Modal";
import {UserInfo} from "./UserInfo/UserInfo";


export default combineReducers({

    Login,CounterReducer,loading,ApiData,ModalSearchUser,UserInfo

})
