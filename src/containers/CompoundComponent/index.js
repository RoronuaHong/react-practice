import React, { PureComponent, Fragment } from 'react'

import ShoppingCart from './ShoppingCart'
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartExpandItem from './ShoppingCartExpandItem' 

export default class CompoundComponent extends PureComponent {
    handleItemClick = itemIndex => {
        console.log(123)
    }

    otherClickHandler = itemIndex => {
        console.log(456)
    }

    render() {
        return (
            <Fragment>
                <ShoppingCart direction='vertical' onItemClick={this.handleItemClick}>
                    <ShoppingCartItem>Eggs</ShoppingCartItem>
                    <ShoppingCartItem onClick={this.otherClickHandler}>Ham</ShoppingCartItem>
                    <ShoppingCartExpandItem extendedDetails={`Details to show when clicked.`}>
                        Bread
                    </ShoppingCartExpandItem>
                </ShoppingCart>
            </Fragment>
        )
    }
}