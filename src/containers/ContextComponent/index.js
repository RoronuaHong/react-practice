import React, { PureComponent } from 'react'

const ThemeContext = React.createContext()

class ThemeProvider extends PureComponent {
    state = { theme: 'dark', color: 'blue' }

    changeTheme = theme => {
        this.setState({ theme })
    }

    changeColor = color => {
        this.setState({ color })
    }

    render() {
        const { theme, color } = this.state
        const { children } = this.props

        return (
            <ThemeContext.Provider 
                value={{
                    theme,
                    color,
                    changeColor: this.changeColor }}>
                <button onClick={e => this.changeTheme('light')}>Change Theme</button>
                {children}
            </ThemeContext.Provider>)
    }
}

const SubComponent = props => (
    <div>
        <div>{props.theme}</div>
        <button onClick={e => props.changeColor('red')}>Change Color</button>
        <div>{props.color}</div>
        <ThemeContext.Consumer>
            {context => (
                <SubsComponent
                    theme={context.theme}
                    color={context.color}
                    changeColor={context.changeColor} />)}
        </ThemeContext.Consumer>
    </div>
)

const SubsComponent = props => (
    <div>
        <div>{props.theme}</div>
        <button onClick={e => props.changeColor('blue')}>Change Color</button>
        <div>{props.color}</div>
    </div>
)

export default class ContextComponent extends PureComponent {
    render() {
        return (
            <ThemeProvider>
                <ThemeContext.Consumer>
                    {context => (
                        <SubComponent 
                            theme={context.theme}
                            color={context.color}
                            changeColor={context.changeColor} />)}
                </ThemeContext.Consumer>
            </ThemeProvider>
        )
    }
}