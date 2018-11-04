import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import Demo from './Demo'
import Fndemo from './Fndemo'

class Refs extends Component {
    demoRefs = React.createRef()
    fndemoRefs = React.createRef()

    focusTextInput = () => {
        if(this.textInput) {
            this.textInput.focus()
        }
    }

    componentDidMount() {
        console.log(this.demoRefs.current)
        console.log(this.fndemoRefs.current)

        this.textInput.focus()
    }

    render() {
        return (
            <Fragment>
                <Demo ref={this.demoRefs}/>
                <Fndemo ref={this.fndemoRefs}/>
                <input type='text' ref={el => this.textInput = el}/>
                <input type='button' onClick={this.focusTextInput}/>
            </Fragment>
        )
    }
}

export default Refs