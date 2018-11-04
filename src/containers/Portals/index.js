import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.body
const MyContext = React.createContext()

class Modal extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    static contextType = MyContext

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

class Portals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0
        }
    }

    handleClick = e => {
        if(e.target !== this.child) {
            this.setState(prevState => ({
                clicks: prevState.clicks + 1
            }))
        }
    }

    render() {
        return (
            <div className='modal-box' onClick={ this.handleClick }>
                <p>Number of clicks: {this.state.clicks}</p>
                <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                </p>
                <Modal>
                    <Child refs={el => this.child = el} />
                </Modal>
            </div>
        )
    }
}

const Child = ({ refs }) => (
    <div className='modal' ref={refs}>
        <button>ClicK</button>
    </div>
)

export default Portals