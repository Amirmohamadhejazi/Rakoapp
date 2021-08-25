import { combineReducers}from 'redux'

import {Login} from './Login'
import {CounterReducer} from "./CounterReducer";

import {SearchUser} from "./SearchUser";
import {ApiData} from "./ApiData";
import {Userinfo} from "./Userinfo";
import {ModalSearchUser} from "./Modal";


export default combineReducers({

    Login,CounterReducer,SearchUser,ApiData,Userinfo,ModalSearchUser

})
