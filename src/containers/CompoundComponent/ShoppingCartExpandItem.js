import React, { PureComponent } from 'react'

const ShoppingCartExpandableItemStyles = {
    shoppingCartItem: {
        width: '100%'
    },
    label: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px'
    },
    labelActive: {
        backgroundColor: 'grey'
    },
    extendedDetails: {
        padding: '10px',
        borderTop: '1px solid grey'
    }
}

export default class ShoppingCartExpandItem extends PureComponent {
    static defaultProps = {
        direction: 'vertical',
        isActive: false,
        extendedDetails: ''
    }

    handleClick = e => {
        const { itemIndex, onClick } = this.props

        onClick(itemIndex)
    }

    render() {
        const { direction, isActive, extendedDetails, children } = this.props
        const itemLabelStyle = isActive ? ({
            ...ShoppingCartExpandableItemStyles.label,
            ...ShoppingCartExpandableItemStyles.labelActive
        }) : ( ShoppingCartExpandableItemStyles.label)

        return (
            <div style={ShoppingCartExpandableItemStyles.shoppingCartItem}
                onClick={this.handleClick}>
                <div style={itemLabelStyle}>{children}</div>
                {isActive && (
                    <div style={ShoppingCartExpandableItemStyles.extendedDetails}>- {extendedDetails}</div>
                )}
            </div>
        )
    }
}