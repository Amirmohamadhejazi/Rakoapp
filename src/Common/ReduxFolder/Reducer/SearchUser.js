import * as Const from './../const/index'
let initial={
    loading:true
}

export const SearchUser = (state= initial, action) => {
    switch (action.type) {
        case 'Setloading':
            return {
                ...state,
                loading:false
            }
            console.log(state)
            break;
        default:
            return state;
            break;
    }
}