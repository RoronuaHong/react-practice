import React, { Component } from "react" 

const HOCAddProps = (WrappedComponent, uid) =>
  class extends Component {
    render() {
      return <WrappedComponent /> 
    }
  } 

class AddComponent extends Component {
  handle = e => {
    if (i >= 1) {
    }
  } 

  render() {
    return <div>添加props</div> 
  }
}

export default HOCAddProps 
