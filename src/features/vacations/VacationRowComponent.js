import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
  filters: {
    margin: '25px 0 25px 0',
    borderRadius: 14
  }
})

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
        <Button variant='contained' color='primary'>
          Modify
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  )
}

VacationRowComponent.propTypes = {
  row: PropTypes.array.isRequired
}

export default VacationRowComponent
