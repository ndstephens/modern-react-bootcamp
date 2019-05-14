import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import styles from '../styles/FormStyles'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
// import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

class Form extends Component {
  render() {
    const { classes } = this.props

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          {/* LOCK ICON */}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          {/* HEADER */}
          <Typography variant="h5">Sign In</Typography>

          {/* LANGUAGE SELECT */}
          <Select value="english">
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>

          {/* SIGN-IN FORM */}
          <form className={classes.form}>
            {/* EMAIL */}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            {/* PASSWORD */}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" name="password" />
            </FormControl>
            {/* CHECKBOX */}
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember Me"
            />
            {/* SIGN-IN BUTTON */}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}

export default withStyles(styles)(Form)
