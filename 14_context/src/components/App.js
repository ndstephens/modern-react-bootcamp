import React from 'react'
import './App.css'

import ThemeProvider from '../contexts/ThemeContext'
import LanguageProvider from '../contexts/LanguageContext'

import PageContent from './PageContent'
import Navbar from './Navbar'
import Form from './Form'

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
          <Navbar />
          <Form />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  )
}

export default App
