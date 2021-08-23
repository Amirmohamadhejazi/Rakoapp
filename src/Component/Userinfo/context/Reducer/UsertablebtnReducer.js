function UsertablebtnReducer(state , action) {
    switch (action.type) {
        case 'ShowModal':
            return {
                ...state,
                ShowModal:true
            }
            break;
            case 'toggleModal':
                let {data} = action.payload;
            return {
                ...state,
                ShowModal:!data
            }
            break;
        default:
            return state;
            break;
    }
}
export default UsertablebtnReducer;