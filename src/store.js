import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import categoryReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    categoryReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)