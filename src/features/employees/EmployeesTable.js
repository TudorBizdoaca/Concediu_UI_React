import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import { useTranslation } from 'react-i18next'

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

function createData(id, avatar, lastName, firstName, email, phone, identifierNumber, birthDate, hireDate, vacationDays) {
  return { id, avatar, lastName, firstName, email, phone, identifierNumber, birthDate, hireDate, vacationDays }
}

const rows = [
  createData(
    0,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  ),
  createData(
    1,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  ),
  createData(
    2,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  ),
  createData(
    3,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  ),
  createData(
    4,
    'https://avatars.githubusercontent.com/u/78529545',
    'Chirita',
    'Alberto',
    'alberto.chirita@totalsoft.ro',
    '0727123456',
    1951115123456,
    '15-11-1995',
    '22-08-2022',
    21
  )
]

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
})

function EmployeesTable() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>{t('Employees.Avatar')}</StyledTableCell>
            <StyledTableCell>{t('Employees.LastName')}</StyledTableCell>
            <StyledTableCell>{t('Employees.FirstName')}</StyledTableCell>
            <StyledTableCell>{t('Employees.Email')}</StyledTableCell>
            <StyledTableCell>{t('Employees.Phone')}</StyledTableCell>
            <StyledTableCell>{t('Employees.IdentifierNumber')}</StyledTableCell>
            <StyledTableCell>{t('Employees.BirthDate')}</StyledTableCell>
            <StyledTableCell>{t('Employees.HireDate')}</StyledTableCell>
            <StyledTableCell>{t('Employees.VacationDays')}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align='center'>
                <Avatar alt={row.lastName + row.firstName} src={row.avatar} />
              </StyledTableCell>
              <StyledTableCell>{row.lastName}</StyledTableCell>
              <StyledTableCell>{row.firstName}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.phone}</StyledTableCell>
              <StyledTableCell>{row.identifierNumber}</StyledTableCell>
              <StyledTableCell>{row.birthDate}</StyledTableCell>
              <StyledTableCell>{row.hireDate}</StyledTableCell>
              <StyledTableCell align='center'>{row.vacationDays}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesTable
