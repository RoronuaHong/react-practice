import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Action from '../../../actions/connect'
import * as newAction from '../../../actions/new'

export default connect(
    state => state,
    dispatch => ({
        ...bindActionCreators(Action.minusNum, dispatch),
        ...bindActionCreators(newAction, dispatch),
    })
)