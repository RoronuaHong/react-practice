import React, { Component, PureComponent, Fragment } from 'react'

export default class UpdateComponent extends PureComponent {
    render() {
        const { a, b, c, d, e, aa, gg, tt } = this.props

        return <Fragment>
            <div>{a}</div>
            <div>{b}</div>
            <div>{c}</div>
            <div>{d}</div>
            <div>{JSON.stringify(e)}</div>
            <div>{JSON.stringify(aa)}</div>
            <ul>
              <li>
                {Array.from(gg).map(it => <div key={it}>
                    {it}
                  </div>)}
              </li>
            </ul>
            <ul>
              <li>
                {Array.from(tt).map(it => <div key={it[0]}>
                    {it[0]}: {it[1]}
                  </div>)}
              </li>
            </ul>
          </Fragment>;
    }
} 