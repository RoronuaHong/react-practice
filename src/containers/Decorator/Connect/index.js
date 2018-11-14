import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Action from '../../../actions/connect'
import initialState from '../../../states/connect'

class Connect extends Component {
    render() {
        const { num, addNum } = this.props
        return(
            <div>
                连接redux
                <button
                    onClick={addNum}
                >点击</button>
                <span>{ num }</span>
            </div>
        )
    }
}


const mapStateToProps = state => {
    const { num } = initialState
    
    return {
        num
    }
}

const mapDispatchToProps = dispatch => ({
    addNum: bindActionCreators(Action.addNum, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Connect)