import React, { PureComponent, Fragment } from "react";
import update from "immutability-helper";

import UpdateComponent from "./UpdateComponent";

export default class ComponentUpdate extends PureComponent {
    state = {
        a: 1,
        b: 2,
        c: 3,
        d: [1, 2],
        e: {
            f: 1,
            g: 2
        },
        aa: {
            bb: {
                dd: [3, 4]
            },
            cc: [5, 6]
        },
        gg: new Set([1, 2, 3, 4, 5]),
        tt: new Map([['a', 1], ['b', 2]])
    }
    handleA = e => {
        this.setState(prevState => ({ a: prevState.a + 1 }));
    }

    handleB = e => {
        this.setState(prevState => ({ b: prevState.b + 1 }));
    }

    handleC = e => {
        this.setState(prevState => ({ c: prevState.c + 1 }));
    }

    handleD = e => {
        this.setState(prevState => ({ d: update(prevState.d, {
            $push: [9]
        })}))
    }

    handleE = e => {
        this.setState(prevState => ({ e: update(prevState.e, {
            $merge: {ff: 'ff'}
        })}))
    }

    handleF = e => {
        this.setState(prevState => ({ aa: update(prevState.aa, {
            bb: { dd: { $push: [5] } },
            cc: { $push: [8] }
        }) }));
    }

    handleG = e => {
        this.setState(prevState => ({ gg: update(prevState.gg, {
            $add: [9]
        }) }));
    }

    handleT = e => {
        this.setState(prevState => ({ tt: update(prevState.tt, {
            $add: [['d', 4]]
        }) }));
    }

    render() {
        const newProps = {...this.state}

        return <Fragment>
            <UpdateComponent {...this.props} {...newProps} />
            <button onClick={this.handleA}>更改a</button>
            <button onClick={this.handleB}>更改b</button>
            <button onClick={this.handleC}>更改c</button>
            <button onClick={this.handleD}>更改d</button>
            <button onClick={this.handleE}>更改e</button>
            <button onClick={this.handleF}>更改f</button>
            <button onClick={this.handleG}>更改g</button>
            <button onClick={this.handleT}>更改t</button>
          </Fragment>;
    }
}