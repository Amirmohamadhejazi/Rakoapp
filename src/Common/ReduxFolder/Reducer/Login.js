import * as Const from './../const/index'
let initial={

    isPhone:true,
    value:"",
    isGuess:false,
    token:undefined
}

export const Login = (state= initial, action) => {
    switch (action.type) {
        case (Const.Get_Number_Email):
            return {...state,
                isPhone:action.isPhone,
                value:action.value
            }
        case (Const.ADD_TOKEN):
            return {...state,
                token:action.token
            }

        default:
            return state
    }
}