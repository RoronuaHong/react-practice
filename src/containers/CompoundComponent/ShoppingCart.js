import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const styles = {
    shoppingCartList: {
        display: 'inline-flex',
        listStyle: 'none',
        padding: '0px',
        border: '1px solid black',
        backgroundColor: '#ccc'
    },
    verticalList: {
        flexWrap: 'wrap',
        borderBottom: '0px'
    },
    horizontalList: {
        flexWrap: 'nowrap',
        borderRight: '0px'
    },
    shoppingCartListItem: {
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        minWidth: '100px',
        width: '100%',
        padding: '10px',
        color: '#f93'
    },
    verticalListItem: {
        borderBottom: '1px solid black'
    },
    horizontalListItem: {
        borderRight: '1px solid black'
    }
}

export default class ShoppingCart extends PureComponent {
    state = { activeItemIndex: 0 }

    static defaultProps = {
        direction: 'vertical',
        onItemClick: () => {}
    }

    renderItems = listItemStyle => {
        const { activeItemIndex } = this.state
        const { direction, children } = this.props

        if(!children) {
            return null
        }

        return React.Children.map(children, (child, index) => {
            if(React.isValidElement(child)) {
                return(
                    <li style={{ ...listItemStyle, ...this.props.listItemStyle }}>
                        {React.cloneElement(child, {
                            direction,
                            itemIndex: index,
                            isActive: index === activeItemIndex,
                            onClick: nextActiveIndex => {
                                this.setState({ activeItemIndex: nextActiveIndex }, () => {
                                    if(child.props.onClick) {
                                        child.props.onClick(nextActiveIndex)
                                    } else {
                                        this.props.onItemClick(nextActiveIndex)
                                    } 
                                })
                            }
                        })}
                    </li>
                )
            }
        })
    }

    render() {
        const { direction } = this.props

        let listStyle
        let listItemStyle

        switch(direction) {
            case 'vertical':
                listStyle = { ...styles.shoppingCartList, ...styles.verticalList }
                listItemStyle = { ...styles.shoppingCartListItem, ...styles.verticalListItem }
                
                break
            case 'horizntal':
                listStyle = { ...styles.shoppingCartList, ...styles.horizontalList }
                listItemStyle = { ...styles.shoppingCartListItem, ...styles.horizontalListItem }
                
                break
            default:
                listStyle = styles.shoppingCartList
                listItemStyle = styles.shoppingCartListItem
        }

        return (
            <ul aria-orientation={direction} style={listStyle}>
                {this.renderItems(listItemStyle)}
            </ul>
        )
    }
}

ShoppingCart.propTypes = {
    onItemClick: PropTypes.func,
    direction: PropTypes.string,
    children: PropTypes.array
}