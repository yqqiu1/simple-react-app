import { all, call, put, takeLatest } from 'redux-saga/effects'
import fetchCategory from './api'

export function* fetchData(action) {
    var data = null;
    data = yield fetchCategory()
        .then((result) => {
            return result;
        }).catch((error) => {
        });
    yield put({ type: "FETCH_SUCCEEDED", data: data });
}

function* watchFetchData() {
    yield takeLatest("FETCH_REQUESTED_SAGA", fetchData)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        call(watchFetchData),
    ])
}