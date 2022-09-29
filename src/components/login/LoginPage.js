import React, { useReducer, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { TextField, Typography } from '@material-ui/core'
import publicMainStyle from 'assets/jss/components/publicMainStyles'
import { initialState, reducer } from './reducers/loginReducer'
import { useMutation } from '@apollo/client'
import { AUTHENTICATE_USER } from './mutations'
import logo from '../../assets/img/logo.svg'

const useStyles = makeStyles(publicMainStyle)

async function sha256(password) {
  const msgBuffer = new TextEncoder().encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

const LoginPage = props => {
  const { setToken } = props
  const theme = useTheme()
  // const { logo } = theme
  const classes = useStyles()
  const [localState, dispatch] = useReducer(reducer, initialState)
  const [authenticateUser] = useMutation(AUTHENTICATE_USER)
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState('')

  const handleChange = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChanged', propertyName, value })
  }

  const handleCLick = async () => {
    setHelperText('')
    if (!localState.userName || !localState.password) {
      setError(true)
      setHelperText('Username and passwords are mandatory.')
      return
    }
    const hasedPassword = await sha256(localState.password)
    const { data } = await authenticateUser({ variables: { userName: localState.userName, password: hasedPassword } })

    if (!data.authenticateUser) {
      setError(true)
      setHelperText('Invalid Username or Password.', 'error')
      return
    }
    setError(false)
    setToken(localState.userName)
  }

  return (
    <Container className={classes.root}>
      <Container className={classes.loginForm} maxWidth='sm'>
        <div className={classes.paper}>
          <img src={logo} alt='logo' className={classes.logo} />
          <div className={classes.loginInputs}>
            <TextField
              className={classes.loginInputsItem}
              id='filled-secondary'
              label={'Username'}
              type='text'
              variant='filled'
              color='secondary'
              InputProps={{
                className: classes.loginInputsItemColor
              }}
              onChange={event => handleChange('userName', event.target.value)}
            ></TextField>
            <TextField
              className={classes.loginInputsItem}
              id='filled-secondary'
              label={'Password'}
              type='password'
              variant='outlined'
              color='secondary'
              InputProps={{
                className: classes.loginInputsItemColor
              }}
              onChange={event => handleChange('password', event.target.value)}
            ></TextField>
            {error && (
              <Typography className={classes.error} color='error'>
                {helperText}
              </Typography>
            )}
          </div>
          <Button className={classes.login} variant='contained' color='primary' size='large' onClick={handleCLick}>
            {'Login'}
          </Button>
          <div className={classes.resetPassword}>
            <Typography>Ai uitat parola?</Typography>
            <Typography>Reseteaza aici</Typography>
          </div>
        </div>
      </Container>
    </Container>
  )
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default LoginPage
