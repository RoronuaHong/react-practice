import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Connect from '../containers/Decorator/Connect'
import Functions from '../containers/Decorator/Functions'
import DecoratorClass from '../containers/Decorator/Class'
import Componentss from '../containers/Decorator/Componentss'

const DecoratorRouters = ({ match }) => (
    <Fragment>
        <Route path={`${match.url}/connect`} component={Connect} />
        <Route path={`${match.url}/function`} component={Functions} />
        <Route path={`${match.url}/class`} component={DecoratorClass} />
        <Route path={`${match.url}/componentss`} component={Componentss} />
    </Fragment>
) 

export default DecoratorRouters