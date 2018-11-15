import * as ConnectActionType from '../constants/connect'

export const addNum = num => {
    console.log(num)
    return {
        type: ConnectActionType.ADD_NUM,
        num
    }
}