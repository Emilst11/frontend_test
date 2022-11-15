import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios'

const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0'

function* getDatas(){
    try{
        const res = yield axios.get(endpoint)
        const delay = time => new Promise(resolve => setTimeout(resolve, time))
        yield call(delay, 2000)
        yield put({type: 'GET_SUCCESS', payload: res.data})
    }catch{
        yield put({type: 'GET_FAILED'})
    }
}

export function* watchData(){
    yield takeEvery('GET_DATA', getDatas)
}