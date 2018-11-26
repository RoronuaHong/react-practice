import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppRouter from '../routers'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from '_redux@4.0.1@redux'

import rootReducer from '../reducers'

let stores

if(process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const openReduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    stores = createStore(
        rootReducer
    )
} else {
    stores = createStore(
        rootReducer
    )
}

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Provider store={stores}>
                    <AppRouter />
                </Provider>
            </BrowserRouter>
        )
    }
}

export default App