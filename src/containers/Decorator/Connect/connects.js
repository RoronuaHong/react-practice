import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Action from '../../../actions/connect'

export default connect(
    state => state,
    dispatch => bindActionCreators(Action, dispatch)
)