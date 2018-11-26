import React, { Component } from 'react'

const HOCExtendProps = WrappedComponent =>
  class extends WrappedComponent {
    render() {
      console.log(this.state);
      console.log(this.props);

      return super.render();
    }
  };

@HOCExtendProps
class ExtendComponent extends Component {
    state = {
        isRight: true
    };

    render() {
        return <div>代理模式之 继承组件</div>
    }
}

export default class HOCExtendComponent extends Component {
    render() {
        return <ExtendComponent time={2}/>
    }
}