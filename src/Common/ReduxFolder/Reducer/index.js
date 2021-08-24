import { combineReducers}from 'redux'

import {Login} from './Login'
import {CounterReducer} from "./CounterReducer";
import {SearchUser} from "./SearchUser";


export default combineReducers({

    Login,CounterReducer,SearchUser

})
