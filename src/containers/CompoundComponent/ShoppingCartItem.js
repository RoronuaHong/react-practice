import React, { PureComponent } from 'react'

const shoppingCartItemStyles = {
    shoppingCartItem: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '10px'
    },
    shoppingCartItemActive: {
        backgroundColor: 'grey'
    }
}

class ShoppingCartItem extends PureComponent {
    static defaultProps = {
        direction: 'vrtical',
        isActive: false
    }

    handleClick = e => {
        const { itemIndex, onClick } = this.props

        onClick(itemIndex)
    }

    render() {
        const { direction, itemIndex, isActive, children } = this.props
        const itemStyle = isActive ? ({
            ...shoppingCartItemStyles.shoppingCartItem,
            ...shoppingCartItemStyles.shoppingCartItemActive
        }) : (
            shoppingCartItemStyles.shoppingCartItem
        )

        return (
            <div style={itemStyle}
                onClick={this.handleClick}>
                {children}
            </div>
        )
    }
}

export default ShoppingCartItem