import connectState from '../states/connect'
import * as ConnectActionType from '../constants/connect'

const connectReducer = (state = connectState, action) => {
    switch(action.type) {
        case ConnectActionType.ADD_NUM:
            return {
                ...state,
                num: state.num + action.num
            }
        default:
            return state
    }
}

export default connectReducer