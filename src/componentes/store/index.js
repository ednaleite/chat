import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const composeEnhacers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [thunk]

const store = createStore(
    reducers,
    composeEnhacers(
        applyMiddleware(...middlewares)
    )
 )

export default store