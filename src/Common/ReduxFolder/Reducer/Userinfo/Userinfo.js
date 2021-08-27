let initial={
    DataRowTable:false,
}

export const Userinfo = (state= initial, action) => {
    switch (action.type) {
        case 'SetDataRow':
            return {
                ...state,
                DataRowTable : action.DataRowTable
            }
            console.log(state , action)
            break;
        default:
            return state;
            break;
    }
}
