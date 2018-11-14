import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

//TODO: 按需加载功能
import DecoratorClass from '../containers/Decorator/Class'
import ForwardingRefs from '../containers/ForwardingRefs'
import Connect from '../containers/Decorator/Connect'
import NotFound from '../containers/NotFound'
import Portals from '../containers/Portals'
import Home from '../containers/Home'
import Refs from '../containers/Refs'

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path='/forwardrefs' component={ForwardingRefs} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/' component={Home} />
                <Route path='/portals' component={Portals} />
                <Route path='/refs' component={Refs}/>
                <Route path='/decorator/class' component={DecoratorClass}/>
                <Route path='/decorator/connect' component={Connect} />
                <Route path='*' component={NotFound} />
            </Switch>
        )
    }
}

export default AppRouter