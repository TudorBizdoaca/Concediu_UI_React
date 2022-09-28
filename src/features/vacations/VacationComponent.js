import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
// import { Button } from '@material-ui/core'
import VacationRowComponent from './VacationRowComponent'

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

// const StyledTableRow = withStyles(theme => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover
//     }
//   }
// }))(TableRow)

function VacationsComponent(props) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Manager</StyledTableCell>
            <StyledTableCell>Vacation Type</StyledTableCell>
            <StyledTableCell>Replacement</StyledTableCell>
            <StyledTableCell>Starting Date</StyledTableCell>
            <StyledTableCell>Ending Date</StyledTableCell>
            <StyledTableCell>State</StyledTableCell>
            <StyledTableCell>Details</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.arr.map((row, index) => (
            <VacationRowComponent key={index} row={row}></VacationRowComponent>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

VacationsComponent.propTypes = {
  arr: PropTypes.array.isRequired
}
export default VacationsComponent
