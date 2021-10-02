let initial={
    loading:true,
}

export const loading = (state= initial, action) => {
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
    }
}
