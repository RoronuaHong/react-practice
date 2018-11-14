import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppRouter from '../routers'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from '../reducers'
// const sagaMiddleware = createSagaMiddleware()
// const middlewares = [sagaMiddleware]

let store

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const openReduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    store = createStore(
        rootReducer,
        // compose(applyMiddleware(...middlewares), openReduxDevtool)
    )
} else {
    store = createStore(
        rootReducer,
        // applyMiddleware(...middlewares)
    )
}

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Provider store={store}>
                    <AppRouter />
                </Provider>
            </BrowserRouter>
        )
    }
}

export default App