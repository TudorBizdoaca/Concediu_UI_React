import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
// import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import DetailsComponent from './DetailsComponent'

// const useStyles = makeStyles({
//   filters: {
//     margin: '25px 0 25px 0',
//     borderRadius: 14
//   }
// })

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#26c6da',
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow)

function VacationRowComponent(props) {
  const { row } = props
  const history = useHistory()
  return (
    <StyledTableRow>
      <StyledTableCell>{row.name}</StyledTableCell>
      <StyledTableCell>{row.manager}</StyledTableCell>
      <StyledTableCell>{row.vacationtype}</StyledTableCell>
      <StyledTableCell>{row.replacement}</StyledTableCell>
      <StyledTableCell>{row.startingdate}</StyledTableCell>
      <StyledTableCell>{row.endingdate}</StyledTableCell>
      <StyledTableCell>{row.state}</StyledTableCell>
      <StyledTableCell>{row.reason}</StyledTableCell>
      <StyledTableCell>
        <Button variant='contained' color='primary' onClick={() => history.push({ pathname: `/vacations/details/${row.id}` })}>
          Details
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  )
}

VacationRowComponent.propTypes = {
  row: PropTypes.object.isRequired
}

export default VacationRowComponent
