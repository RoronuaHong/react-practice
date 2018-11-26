import React, { Component, Fragment } from "react";

const HOCExtractProps = WrappedComponent =>
  class extends Component {
    state = {
      name: ""
    };

    onNameChange = e => {
      this.setState({ name: e.target.value });
    };

    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange
        }
      };

      return <WrappedComponent {...newProps} {...this.props} />;
    }
  };

class ExtractComponent extends Component {
  render() {
    console.log(this.props.name.value);
    return <input type="text" {...this.props.name} />;
  }
}

class HOCExtractComponent extends Component {
  render() {
    const NewComponent = HOCExtractProps(ExtractComponent);

    return <Fragment>
        <div>代理方式之抽取状态</div>
        <NewComponent />
        <NewComponent />
      </Fragment>;
  }
}

export default HOCExtractComponent;
