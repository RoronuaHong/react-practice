import React, { Fragment } from 'react' 
import { Route, Redirect, Switch } from 'react-router-dom' 

import HOCComponent from '../containers/HOCComponent' 
import HOCAddComponent from '../containers/HOCComponent/HOCAddComponent' 
import HOCRemoveComponent from '../containers/HOCComponent/HOCRemoveComponent' 
import HOCExtendComponent from '../containers/HOCComponent/HOCExtendComponent' 
import HOCExtractComponent from '../containers/HOCComponent/HOCExtractComponent' 
import HOCWrappingComponent from '../containers/HOCComponent/HOCWrappingComponent' 
import HOCPropsComponent from '../containers/HOCComponent/HOCPropsComponent' 

const HOCComponentRouters = ({ match }) => 
    <Switch>
        <Route exact path={`${match.url}`} component={HOCComponent} />
        <Route path={`${match.url}/hocaddcomponent`} component={HOCAddComponent} />
        <Route path={`${match.url}/hocremovecomponent`} component={HOCRemoveComponent} />
        <Route path={`${match.url}/hocextendcomponent`} component={HOCExtendComponent} />
        <Route path={`${match.url}/hocextractcomponent`} component={HOCExtractComponent} />
        <Route path={`${match.url}/hocwrappingcomponent`} component={HOCWrappingComponent} />
        <Route path={`${match.url}/hocpropscomponent`} component={HOCPropsComponent} />
        <Redirect from='*' to='/home' />
    </Switch>


export default HOCComponentRouters 
