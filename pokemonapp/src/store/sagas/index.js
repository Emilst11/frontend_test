import { all } from 'redux-saga/effects'
import { watchData } from './lists'
import { watchDetail } from './details'

export default function* rootSaga(){
    yield all([
        watchData(),
        watchDetail()
    ])
}