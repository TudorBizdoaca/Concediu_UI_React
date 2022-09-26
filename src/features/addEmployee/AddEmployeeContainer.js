import EmployeeForm from 'components/employeeAdd/EmployeeForm'
import React, { useReducer } from 'react'
import { reducer, initialState } from '../../components/employeeAdd/reducer/reducer'
import { useTranslation } from 'react-i18next'
import cardContainer from 'assets/jss/components/cardContainer'
import { Grid, makeStyles } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { POST_EMPLOYEE } from '../../components/employeeAdd/mutations'

function AddEmployeeContainer() {
  const { t } = useTranslation()
  const useStyles = makeStyles(cardContainer)
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, initialState)
  const dispatchWrapper = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
  }
  const [data] = useMutation(POST_EMPLOYEE)
  let insertDone
  const handleSave = async () => {
    console.log(data)
    await data({
      variables: {
        input: {
          nume: state.nume,
          prenume: state.prenume,
          cnp: state.cnp,
          email: state.email,
          parola: state.parola,
          dataAngajare: state.dataAngajarii,
          dataNasterii: state.dataNasterii,
          serie: state.serie,
          no: state.nr,
          nrTelefon: state.phone,
          esteAdmin: false
        }
      }
    }).then(resp => (insertDone = resp.data.createUserData))
    console.log(insertDone)
  }

  return (
    <Grid item container className={classes.card} xs={12}>
      <h1 className={classes.title}>{t('Tooltips.AddEmployee')}</h1>
      <EmployeeForm dispatchWrapper={dispatchWrapper} state={state} handleSave={handleSave} />
    </Grid>
  )
}

export default AddEmployeeContainer
