import * as Const from './../const/index'
let initial={
 counter:0
}

export const CounterReducer = (state= initial, action) => {
    switch (action.type) {
        case (Const.Decrease_Number):
            return {...state,
                counter:action.counter
            }
        case (Const.Increase_Number):
            return {...state,
                counter:action.counter
            }

        default:
            return state
    }
}