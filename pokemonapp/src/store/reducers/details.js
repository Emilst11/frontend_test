const detailState = {
    data: [],
    isLoading: false
}

const details = (state = detailState, action) => {
    const { type, payload } = action
    switch(type){
        case 'GET_DETAILS':
            return{
                ...state,
                isLoading: true
            }
        case 'DETAILS_SUCCESS':
            return{
                data: payload,
                isLoading: false
            }
        case 'DETAILS_FAILED':
            return{
                isLoading: false
            }
        case 'GET_EMPTY':
            return{
                data: [],
                isLoading: false
            }
        default:
            return state
    }
}

export default details