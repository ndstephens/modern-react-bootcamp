import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

class ThemeProvider extends Component {
  state = { isDarkTheme: false }

  toggleTheme = () => {
    this.setState(prevSt => ({
      isDarkTheme: !prevSt.isDarkTheme,
    }))
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
