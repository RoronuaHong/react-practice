import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from '../containers/NotFound'
import Portals from '../containers/Portals'
import Home from '../containers/Home'
import Refs from '../containers/Refs'
import ForwardingRefs from '../containers/ForwardingRefs'

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route path='/portals' component={Portals} />
                <Route path='/refs' component={Refs}/>
                <Route path='/forwardrefs' component={ForwardingRefs} />
                <Route path='*' component={NotFound} />
            </Switch>
        )
    }
}

export default AppRouter