import React, { Component } from 'react'

const HOCRemoveComponent = WrappedComponent => 
    class extends Component {
        state = { aaa: 2 }

        render() {
            const { news, pub, ...newProps } = this.props

            return <WrappedComponent { ...this.state } { ...newProps } />
        }
    }

class RemoveComponent extends Component {
    render() {
        console.log(this.props.news)
        console.log(this.props.pub)
        console.log(this.props.arr)

        return (
            <div>删除props</div>
        )
    }
}

class ReComponent extends Component {
    render() {
        const NewComponent = HOCRemoveComponent(RemoveComponent)
        const pub = {
            a: 1,
            b: 2,
            c: 3
        }
        const arr = [1, 2, 3, 4, 5]

        return (
            <NewComponent 
                news={'news'}
                pub={pub}
                arr={arr} />
        )
    }
}

export default ReComponent