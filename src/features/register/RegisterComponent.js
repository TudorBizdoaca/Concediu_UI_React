import React from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import formStyle from './styles/formStyle'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Cancel from '@material-ui/icons/Cancel'
import useUserData from 'hooks/useUserData'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'

import { Autocomplete } from '@bit/totalsoft_oss.react-mui.kit.core'
function RegisterComponent(props) {}

export default RegisterComponent
RegisterComponent.propTypes = {
  dispatchWrapper: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  handleSave: PropTypes.func.isRequired
}
