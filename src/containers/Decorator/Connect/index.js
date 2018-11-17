import React, { Component } from 'react'

import connects from './connects'

@connects
export default class Connect extends Component {
    render() {
        const { num, addNum } = this.props

        return(
            <div>
                连接redux
                <button onClick={e => addNum(5)}>点击</button>
                <span>{ num }</span>
            </div>
        )
    }
}