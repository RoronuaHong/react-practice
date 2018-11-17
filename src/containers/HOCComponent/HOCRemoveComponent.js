import React, { Component } from 'react'

const HOCRemoveProps = (WrappedComponent) => {
    return class WrappingComponent extends Component {
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
}

class HOCRemoveComponent extends Component {
    render() {
        return (
            <div>12345</div>
        )
    }
}

export default HOCRemoveComponent