import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import ContextComponent from '../containers/ContextComponent'

const ContextRouters = ({ match }) =>
    <Switch>
        <Route path={`${match.url}`} component={ContextComponent} />
        <Redirect from='*' to='/home' />
    </Switch>

export default ContextRouters