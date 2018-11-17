import * as ConnectActionType from '../constants/connect'

export const addNum = num => ({
    type: ConnectActionType.ADD_NUM,
    num
})

export const minusNum = num => ({
    type: ConnectActionType.MINUS_NUM,
    num
})