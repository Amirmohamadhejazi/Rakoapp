import * as Const from './../../const/index'
let initial={
    // DataRowTable:{} ,
    eachData :false
}

export const UserInfo = (state= initial, action) => {
    switch (action.type) {
        case (Const.GetUserInfo):
            return {
                ...state,
                eachData:action.eachData
            }
            console.log(state , action)
            break;
        default:
            return state;
    }
}
