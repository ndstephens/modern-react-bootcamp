import React, { Component, createContext } from 'react'

export const LanguageContext = createContext()

export default class LanguageProvider extends Component {
  state = { language: 'FR' }

  updateLanguage = e => this.setState({ language: e.target.value })

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, updateLanguage: this.updateLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
