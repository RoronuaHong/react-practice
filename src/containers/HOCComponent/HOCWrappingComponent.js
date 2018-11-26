import React, { Component, Fragment } from 'react'

const HOCWrapingProps = (WrappedComponent, style) =>
    class extends Component {
        componentDidMount() {
            console.log(2)
        }

        componentWillUnmount() {
            console.log(22)
        }

        render() {
            const newProps = {
                news: `包装组件`
            }
            return(
                <div style={style}>
                    <WrappedComponent {...this.props} { ...newProps }/>
                </div>
            )
        }
    }

class WrappedComponent extends Component {
  componentDidMount() {
    console.log(3);
  }

  componentWillUnmount() {
      console.log(33)
  }

  render() {
    console.log(this.props.news);
    return <div>代理方式之包装组件</div>;
  }
}

class HOCWrappingComponent extends Component {
    state = {
        show: true
    }
    
    componentDidMount() {
        console.log(1)
    }

    componentWillUnmount() {
        console.log(11)
    }

    handleClose = e => {
        this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    render() {
        const { show } = this.state
        const styled = { color: '#fcc' };
        const NewComponent = HOCWrapingProps(WrappedComponent, styled);
        
        return <Fragment>
            {show && <NewComponent />}
            <button onClick={this.handleClose}>开关</button>
          </Fragment>;
    }
}

export default HOCWrappingComponent;