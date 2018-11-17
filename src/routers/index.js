import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

//TODO: 按需加载功能
import ForwardingRefs from '../containers/ForwardingRefs'
import NotFound from '../containers/NotFound'
import Portals from '../containers/Portals'
import Home from '../containers/Home'
import Refs from '../containers/Refs'

import DecoratorRouters from './DecoratorRouters'
import HOCComponentRouters from './HOCComponentRouters'

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path='/forwardrefs' component={ForwardingRefs} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/' component={Home} />
                <Route path='/portals' component={Portals} />
                <Route path='/refs' component={Refs} />
                <Route path='/decorator' component={DecoratorRouters} />
                <Route path='/hoccomponent' component={HOCComponentRouters} />
                <Route path='*' component={NotFound} />
            </Switch>
        )
    }
}

export default AppRouter