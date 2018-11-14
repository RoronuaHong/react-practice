import React, { Component } from 'react'

class Paint extends Component {
    render() {
        return (
            <div>444</div>
        )
    }
}

const BigPaintHOC = Components => (() => {
    class WhatEver extends Component {
        render() {
            const { textRef, ...props } = this.props
            return (
                <Components ref={textRef}></Components>
            )
        }
    }

    const paintRef = React.forwardRef((props, ref) => (
        <WhatEver textRef={ref}></WhatEver>
    ))

    return paintRef
})()

const BigPaint = BigPaintHOC(Paint)

export default BigPaint