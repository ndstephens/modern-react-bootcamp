import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

class ThemeProvider extends Component {
  state = { isDarkTheme: true }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider
