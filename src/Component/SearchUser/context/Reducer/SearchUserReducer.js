function SearchUserReducer(state , action) {
    switch (action.type) {
        case 'setLoading':
            return {
                ...state,
                loading:false
            }
            break;
        case 'setApiData':
            let {data} = action.payload;
                return {
                    ...state,
                    ApiData:  data
                }
            break;
        default:
            return state;
            break;
    }
}
export default SearchUserReducer;