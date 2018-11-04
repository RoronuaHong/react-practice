import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import FancyButton from './FancyButton'
import BigPaint from './BigPaint'
import Paint from './Paint'

class ForwardingRefs extends Component {
    btnRef = React.createRef()
    paintRef = React.createRef()
    bigPaintRef = React.createRef()

    componentDidMount() {
        console.log(this.btnRef.current)
        console.log(this.paintRef.current)
        console.log(ReactDOM.findDOMNode(this.bigPaintRef.current))
    }

    render() {
        return (
            <Fragment>
                <FancyButton ref={this.btnRef}>Click Me</FancyButton>
                <Paint ref={this.paintRef}></Paint>
                <BigPaint ref={this.bigPaintRef} />
            </Fragment>
        )
    }
}

export default ForwardingRefs