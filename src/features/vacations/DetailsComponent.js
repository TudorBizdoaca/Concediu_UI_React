import React, { useState, useRef, useEffect } from 'react'
// import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useRouteMatch } from 'react-router-dom'
import { MenuItem } from '@material-ui/core'

function createData(name, manager, vacationtype, replacement, startingdate, endingdate, state, reason) {
  return { name, manager, vacationtype, replacement, startingdate, endingdate, state, reason }
}

const arr = [
  createData('Frozen yoghurt', 159, 6.0, 24, '2022-09-23', '2022-09-23', 'ss', 'aa'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'dd', 'ss', 'aa'),
  createData('Eclair', 262, 16.0, 24, 6.0, 'dd', 'ss', 'aa'),
  createData('Cupcake', 305, 3.7, 67, 4.3, 'dd', 'ss', 'aa'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'dd', 'ss', 'aa')
]

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}))
const replacementss = [
  {
    value: 'Smecher',
    label: 'Gigel'
  },
  {
    value: 'Fraier',
    label: 'Dorel'
  }
]

function DetailsComponent() {
  const Vid = useRouteMatch()
  const classes = useStyles()
  const [replacement, setReplacement] = React.useState(arr[Vid.params.id.replacement])

  const handleChange = event => {
    setReplacement(event.target.value)
  }
  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <h1>
        <div>
          <TextField
            id='standard-read-only-input'
            label='Name'
            inputProps={{ readOnly: true }}
            defaultValue={arr[Vid.params.id].name}
            value={arr[Vid.params.id].name}
          />
          <TextField
            id='standard-read-only-input'
            label='Manager'
            inputProps={{ readOnly: true }}
            defaultValue={arr[Vid.params.id].manager}
          />
          <TextField
            id='standard-read-only-input'
            label='Vacation Type'
            inputProps={{ readOnly: true }}
            defaultValue={arr[Vid.params.id].vacationtype}
          />
          <TextField
            id='standard-select-replacement'
            select
            label='Replacement'
            // inputProps={{ readOnly: true }}
            value={replacement}
            onChange={handleChange}
            // defaultValue={arr[Vid.params.id].replacement}
          >
            {replacementss.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            type='date'
            // id='standard-read-only-input'
            label='Starting Date'
            // inputProps={{ readOnly: true }}
            defaultValue={arr[Vid.params.id].startingdate}
          />
          <TextField
            type='date'
            // id='standard-read-only-input'
            label='Ending Date'
            // inputProps={{ readOnly: true }}
            defaultValue={arr[Vid.params.id].endingdate}
          />
          <TextField id='standard-read-only-input' label='State' inputProps={{ readOnly: true }} defaultValue={arr[Vid.params.id].state} />
          <TextField
            id='standard-read-only-input'
            label='Reason'
            inputProps={{ readOnly: true }}
            defaultValue={arr[Vid.params.id].reason}
          />
        </div>
        <button>Edit</button>
      </h1>
    </form>
  )
}

export default DetailsComponent
