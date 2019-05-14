import React, { useContext } from 'react'

import { ThemeContext } from '../contexts/ThemeContext'

function PageContent(props) {
  const { isDarkTheme } = useContext(ThemeContext)

  const styles = {
    backgroundColor: isDarkTheme ? 'darkgray' : 'white',
    height: '100vh',
    width: '100vw',
  }

  return <div style={styles}>{props.children}</div>
}

export default PageContent
