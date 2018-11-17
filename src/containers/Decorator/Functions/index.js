import React, { Component } from 'react'

class Fucntions extends Component {
    render() {
        /**
 * 只读修饰
 */
        const readonly = (target, name, descriptor) => {
            descriptor.writable = false

            return descriptor
        }

        class Person {
            @readonly
            name() { return `${this.first} ${this.last}` }
        }

        /**
         * 输出日志
         */
        function log(target, name, descriptor) {
            const oldValue = descriptor.value

            descriptor.value = () => {
                console.log(`Calling ${name} with`, arguments)

                return oldValue.apply(this, arguments)
            }

            return descriptor
        }

        class Math {
            @log
            add(a, b) {
                return a + b
            }
        }

        /**
         * 多重装饰器, 如栈,后进先出
         */
        const dec = id => {
            console.log('evaluted', id)

            return (target, property, descriptor) => console.log('executed', id)
        }

        class Example {
            @dec(1)
            @dec(2)
            method() { console.log(333) }
        }
        
        const math = new Math()

        math.add(2, 4)

        const example = new Example()

        example.method()

        return (
            <div>
                修饰类的属性:
                <p>
                    function test(target, name, descriptor) {
                        //do something...
                    }

                    test(Class.prototype, 'name', descriptor)
                </p>
            </div>
        )
    }
}

export default Fucntions