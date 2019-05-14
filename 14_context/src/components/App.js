import React from 'react'
import './App.css'

import ThemeProvider from '../contexts/ThemeContext'
import PageContent from './PageContent'
import Navbar from './Navbar'
import Form from './Form'

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  )
}

export default App
