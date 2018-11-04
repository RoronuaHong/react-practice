import React, { Component } from 'react'

class Redpaint extends Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

const PaintHOC = Component => React.forwardRef((props, ref) => 
    <Component ref={ref}>{props.children}</Component>
)

const Paint = PaintHOC(Redpaint)

export default Paint