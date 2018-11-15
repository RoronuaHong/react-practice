import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Action from '../../../actions/connect'

@connect(mapStateToProps, mapDispatchToProps)
export default class Connect extends Component {
    render() {
        const { num, addNum } = this.props

        return(
            <div>
                连接redux
                <button onClick={e => addNum(1)}>点击</button>
                <span>{ num }</span>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { num } = state
    
    return {
        num
    }
}

const mapDispatchToProps = dispatch => ({
    addNum: bindActionCreators(Action.addNum, dispatch)
})