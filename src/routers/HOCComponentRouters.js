import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import HOCComponent from '../containers/HOCComponent'
import HOCRemoveComponent from '../containers/HOCComponent/HOCRemoveComponent'

const HOCComponentRouters = ({ match }) => (
    <Fragment>
        <Route exact path={`${match.url}`} component={HOCComponent} />
        <Route path={`${match.url}/hocremovecomponent`} component={HOCRemoveComponent} />
    </Fragment>
)

export default HOCComponentRouters