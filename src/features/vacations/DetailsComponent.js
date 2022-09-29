import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useRouteMatch } from 'react-router-dom'
import { GET_DETAILS } from './queries'
import { POST_DETAILS } from './queries'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { useMutation } from '@apollo/client'
import { format } from 'date-fns'

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
  const { refetch } = useQueryWithErrorHandling(GET_DETAILS, {
    variables: { id: parseInt(Vid.params.id, 10) },
    onCompleted: data => setState(data.detailsData)
  })

  const arr = state
  var show = false
  if (arr?.stareConcediu === 'in asteptare') show = true
  const [updateStare] = useMutation(POST_DETAILS, {
    onCompleted: _ => {
      refetch()
    }
  })

  const handleClick = stareConcediuId => () => {
    updateStare({
      variables: {
        input: { id: arr.id, stareConcediuId }
      }
    })
  }

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <h1>
        <div>
          <TextField id='standard-read-only-input' label='Name' inputProps={{ readOnly: true }} value={arr ? arr.nume : ''} />
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
            label='Starting Date'
            inputProps={{ readOnly: true }}
            InputLabelProps={{ shrink: true }}
            value={arr ? arr.dataInceput : '2022-05-24'}
          />
          <TextField
            InputLabelProps={{ shrink: true }}
            label='Ending Date'
            inputProps={{ readOnly: true }}
            value={arr ? arr.dataSfarsit : '2022-05-24'}
          />
          <TextField id='standard-read-only-input' label='State' inputProps={{ readOnly: true }} value={arr ? arr.stareConcediu : ''} />
          <TextField id='standard-read-only-input' label='Reason' inputProps={{ readOnly: true }} value={arr ? arr.motivRespingere : ''} />
        </div>
        {show && (
          <button variant='outlined' onClick={handleClick(1)}>
            Aproba
          </button>
        )}
        {show && (
          <button variant='outlined' onClick={handleClick(3)}>
            Respinge
          </button>
        )}
      </h1>
    </form>
  )
}

export default DetailsComponent
