import React, { Component } from 'react'

const HOCPropsProps = WrappedComponent =>
    class extends WrappedComponent {
        render() {
            const ele= super.render()
            console.log(ele.children);
            let newProps = { color: (ele && ele.type === 'div') ?
                '#fff' : '#ff5555' }
            const props = { ...ele.props, ...newProps }
            const newElementsTree = React.cloneElement(ele, props, ele.props.children)

            return newElementsTree
        }
    }

@HOCPropsProps
class PropsComponent extends Component {
    render() {
        return(
            <span><div>操纵Props</div></span>
        )
    }
}

export default class HOCPropsComponent extends Component {
    render() {
        return <PropsComponent />
    }
}