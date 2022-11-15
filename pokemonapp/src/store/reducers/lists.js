const listState = {
    data: [],
    isLoading: false
}

const lists = (state = listState, action) => {
    const { type, payload } = action
    switch(type){
        case 'GET_DATA':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_SUCCESS':
            return{
                data: payload,
                isLoading: false
            }
        default:
            return state
    }
}

export default lists