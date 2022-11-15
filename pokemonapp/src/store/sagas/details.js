import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios'

const endpoint = 'https://pokeapi.co/api/v2/pokemon/'

function* getDetails(action){
    const {payload} = action
    try{
        const res = yield axios.get(endpoint + payload)
        const delay = time => new Promise(resolve => setTimeout(resolve, time))
        yield call(delay, 2000)
        yield put({type: 'DETAILS_SUCCESS', payload: res.data})
    }catch{
        yield put({type: 'DETAILS_FAILED'})
    }
}

export function* watchDetail(){
    yield takeEvery('GET_DETAILS', getDetails)
}