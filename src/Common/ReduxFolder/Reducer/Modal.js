let initial={
    Modal:false,
}

export const ModalSearchUser = (state= initial, action) => {
    switch (action.type) {
        case 'Show':
            return {
                ...state,
                Modal:true
            }
            console.log(state)
            break;
            case 'Hide':
            return {
                ...state,
                Modal:false
            }
            console.log(state)
            break;
        default:
            return state;
            break;
    }
}
