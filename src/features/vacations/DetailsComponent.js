import React, { useState, useRef, useEffect } from 'react'
// import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useRouteMatch } from 'react-router-dom'
import { MenuItem } from '@material-ui/core'
import PropTypes from 'prop-types'
import { GET_DETAILS } from './queries'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'

// function createData(name, manager, vacationtype, replacement, startingdate, endingdate, state, reason) {
//   return { name, manager, vacationtype, replacement, startingdate, endingdate, state, reason }
// }

// const arr = [
//   createData('Frozen yoghurt', 159, 6.0, 24, '2022-09-23', '2022-09-23', 'ss', 'aa'),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'dd', 'ss', 'aa'),
//   createData('Eclair', 262, 16.0, 24, 6.0, 'dd', 'ss', 'aa'),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 'dd', 'ss', 'aa'),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 'dd', 'ss', 'aa')
// ]

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}))

function DetailsComponent() {
  const Vid = useRouteMatch()
  const classes = useStyles()
  const [state, setState] = useState(null)
  useQueryWithErrorHandling(GET_DETAILS, {
    variables: { id: parseInt(Vid.params.id, 10) },
    onCompleted: data => setState(data.detailsData)
  })
  const arr = state

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <h1>
        <div>
          <TextField
            id='standard-read-only-input'
            label='Name'
            inputProps={{ readOnly: true }}
            // defaultValue={arr[Vid.params.id].name}
            value={arr ? arr.nume : ''}
          />
          <TextField id='standard-read-only-input' label='Manager' inputProps={{ readOnly: true }} value={arr ? arr.numeManager : ''} />
          <TextField
            id='standard-read-only-input'
            label='Vacation Type'
            inputProps={{ readOnly: true }}
            value={arr ? arr.tipConcediu : ''}
          />
          <TextField
            id='standard-select-replacement'
            inputProps={{ readOnly: true }}
            label='Replacement'
            value={arr ? arr.inlocuitor : 'nu are'}
          ></TextField>
        </div>
        <div>
          <TextField
            type='date'
            // id='standard-read-only-input'
            label='Starting Date'
            inputProps={{ readOnly: true }}
            InputLabelProps={{ shrink: true }}
            value={arr ? arr.dataInceput.toDateString : '2022-05-24'}
          />
          <TextField
            type='date'
            // id='standard-read-only-input'
            InputLabelProps={{ shrink: true }}
            label='Ending Date'
            inputProps={{ readOnly: true }}
            value={arr ? arr.dataSfarsit.toDateString : '2022-05-24'}
          />
          <TextField id='standard-read-only-input' label='State' inputProps={{ readOnly: true }} value={arr ? arr.stareConcediu : ''} />
          <TextField id='standard-read-only-input' label='Reason' inputProps={{ readOnly: true }} value={arr ? arr.motivRespingere : ''} />
        </div>
        <button>Edit</button>
      </h1>
    </form>
  )
}
// DetailsComponent.propTypes = {
//   row: PropTypes.object.isRequired
// }

export default DetailsComponent
