import React, { Component } from 'react'
/**
 * 【重点】装饰器写法的组件 -- 有问题
 */
// @Component({
//     tag: 'Componentss',
//     styleUrl: '../../../scss/componentss'
// })
// export class Componentss {
//     // @Props() last: string
//     // @Props() first: string
//     // @State() isVisible: boolean = true

//     render() {
//         return (
//             <p>Hello, my name is </p>
//         )
//     }
// }

class Componentss extends Component {
    render() {
        return (
            <div>123</div>
        )
    }
}

export default Componentss

// Componentss.defaultProps = {
//     first: 'Slim',
//     last: 'Hong'
// }