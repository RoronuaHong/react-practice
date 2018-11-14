import React, { Component } from 'react'
/**
 * 类的修饰
 */

/**
 * 普通添加静态属性
 */
const testable = target => {
    target.isTestable = true
}

@testable
class MyTestableClass {
    
}

/**
 * 包一层增加一个参数添加静态属性
 * @param {*} isTestable 
 */
const testables = isTestable => {
    return target => {
        target.isTestable = isTestable
    }
}

@testables(false)
class MyTestablesClass {
    
}

const test = target => {
    target.prototype.isTestable = true
}

@test
class MyClass {

}

/**
 * 对象的方法添加到类的原型上
 */
const mixins = ({...list}) => {
    return target => {
        target.prototype = {
            ...list
        }
    }
}

const Foo = {
    foo() { console.log('foo function.') }
}

@mixins(Foo)
class Fclass {

}

class Dclass extends Component {
    render() {
        console.log(MyTestableClass.isTestable)
        console.log(MyTestablesClass.isTestable)

        const obj = new MyClass()
        console.log(obj.isTestable)

        const obj1 = new Fclass()
        obj1.foo()

        return (
            <div>
                A = testable(A) || A
            </div>
        )
    }
}

export default Dclass