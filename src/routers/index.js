import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

//TODO: 按需加载功能
import ForwardingRefs from '../containers/ForwardingRefs'
import NotFound from '../containers/NotFound'
import Portals from '../containers/Portals'
import Home from '../containers/Home'
import Refs from '../containers/Refs'
import States from '../containers/States'
import ComponentUpdate from '../containers/ComponentUpdate'

import ContextRouters from './ContextRouters'
import CompoundRouters from './CompoundRouters'
import DecoratorRouters from './DecoratorRouters'
import HOCComponentRouters from './HOCComponentRouters'

class AppRouter extends Component {
    render() {
        return <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={Home} />
            <Route path='/forwardrefs' component={ForwardingRefs} />
            <Route path='/portals' component={Portals} />
            <Route path='/refs' component={Refs} />
            <Route path='/states' component={States} />
            <Route path='/componentupdate' component={ComponentUpdate} />
            <Route path='/decorator' component={DecoratorRouters} />
            <Route path='/hoccomponent' component={HOCComponentRouters} />
            <Route path='/compound' component={CompoundRouters} />
            <Route path='/context' component={ContextRouters} />
            <Redirect from='*' to='/home' />
          </Switch>
    }
}

export default AppRouter