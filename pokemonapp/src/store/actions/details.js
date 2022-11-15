export const getDetail = (name) => {
    return{
        type: 'GET_DETAILS',
        payload: name
    }
}

export const turnBack = () => {
    return{
        type: 'GET_EMPTY'
    }
}