import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import CompoundComponent from '../containers/CompoundComponent'

const CompoundRouters = ({ match }) =>
    <Switch>
        <Route path={`${match.url}`} component={CompoundComponent} />
        <Redirect from='*' to='/home' />
    </Switch>

export default CompoundRouters