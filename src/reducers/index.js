import state from '../states/connect'
import * as ConnectActionType from '../constants/connect'

const connectReducer = (state, action) => {
    switch(action.type) {
        case ConnectActionType.ADD_NUM:
            return state + 1
        default:
            return state
    }
}

export default connectReducer