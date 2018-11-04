import React from 'react'
import { render } from 'react-dom'

import App from './containers/App'
import './scss'

render(
    <App />,
    document.querySelector('#app')
)

if(typeof(module.hot) !== 'undefined') {
    module.hot.accept()
}