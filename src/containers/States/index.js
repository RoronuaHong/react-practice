import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class States extends Component {
    static defaultProps = {
        nums: 7
    }

    state = { num: 1 }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(prevState.num);
        return {}
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(22);

        return true
    }

    componentDidMount() {
        this.setState({ num: 2 });
        this.setState({ num: 3 });
        this.setState({ num: 4 });

        setTimeout(() => {
            this.setState({ num: 5 });
            this.setState({ num: 6 });
        });

        // console.log(44);
        // console.log(this.state.num);
    }

    getSnapshotBeforeUpdate(prevProp, prevState) {
        // console.log(55);
        return {}
    }  

    componentDidUpdate(prevProp, prevState, snop) {
        // console.log(snop);
        // console.log(this.state.num);
    }

    handleNum = e => {
        this.setState(prevState => ({ num: 8 }));
        this.setState(prevState => ({ num: 9 }));
        this.setState(prevState => ({ num: 10 }));

    }
 
    render() {
        return <div onClick={this.handleNum}>
            State的功能测试
            <Link to='/home'>{this.state.num}</Link>
            </div>;
        }
}

//1. 在shouldComponentUpdate, getSnapshotBeforeUpdate中输出的state

//2. 在componentDidMount中可以设置this.setState，其他生命周期不行

//3. 生命周期的执行顺序

//4. shouldUpdateComponent 例子:
// 不改变b, 更新a, c