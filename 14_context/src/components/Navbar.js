import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import styles from '../styles/NavbarStyles'

import { ThemeContext } from '../contexts/ThemeContext'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Switch from '@material-ui/core/Switch'
import SearchIcon from '@material-ui/icons/Search'

class Navbar extends Component {
  static contextType = ThemeContext

  render() {
    const { classes } = this.props
    const { isDarkTheme, toggleTheme } = this.context

    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkTheme ? 'default' : 'primary'}>
          <Toolbar>
            {/* FLAG */}
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="French Flag">
                🇫🇷
              </span>
            </IconButton>

            {/* TITLE */}
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title
            </Typography>

            {/* THEME SWITCH */}
            <Switch onChange={toggleTheme} />

            <div className={classes.grow} />

            {/* SEARCH INPUT */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
