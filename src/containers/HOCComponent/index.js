import React, { Component, Fragment } from "react";

export default class HOCComponent extends Component {
  render() {
    return (
      <Fragment>
        <div>HOC组件</div>
        <ul>
          <li>1.删除Props</li>
          <li>2.添加Props</li>
        </ul>
      </Fragment>
    );
  }
}
