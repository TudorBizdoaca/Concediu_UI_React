import EmployeeForm from 'components/employeeAdd/EmployeeForm'
import React, { useReducer, useEffect } from 'react'
import { reducer, initialState } from '../../components/employeeAdd/reducer/reducer'
import { useTranslation } from 'react-i18next'
import formStyle from 'components/employeeAdd/styles/formStyle'
import { Grid, makeStyles } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { POST_EMPLOYEE } from '../../components/employeeAdd/mutations'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_MANAGERI } from './queries'
import { extractDataNastereFromCnp } from './utils/extractDataNastereFromCnp'
import {
  validareCnp,
  validareEmail,
  validareNr,
  validareNume,
  validareParola,
  validarePhone,
  validarePrenume,
  validareSerie,
  verificareDataNastereCnp
} from './utils/validariAngajat'
import { verifyForm } from 'features/register/verifyForm'

function AddEmployeeContainer() {
  const { t } = useTranslation()

  const [state, dispatch] = useReducer(reducer, initialState)
  const { data: dataManager, loading } = useQueryWithErrorHandling(GET_MANAGERI)

  useEffect(() => {
    if (dataManager && !loading) {
      dispatch({
        type: 'manageri',
        results: dataManager?.getManageri
      })
    }
  }, [dataManager, loading])

  const dispatchWrapper = (propertyName, value) => {
    dispatch({ type: 'OnPropertyChange', propertyName, value })
  }
  const addToast = useToast()
  const [data] = useMutation(POST_EMPLOYEE)
  let insertDone
  let pozaI =
    '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'
  async function sha256(password) {
    const msgBuffer = new TextEncoder().encode(password)
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return hashHex
  }
  const useStyles = makeStyles(formStyle)
  const classesForm = useStyles()
  const handleSave = async () => {
    const hashed = await sha256(state.parola)
    if (verifyForm(state) === true) {
      await data({
        variables: {
          input: {
            nume: state.nume,
            prenume: state.prenume,
            cnp: state.cnp,
            email: state.email,
            parola: hashed,
            dataAngajare: state.dataAngajarii,
            dataNasterii: state.dataNasterii,
            serie: state.serie,
            no: state.nr,
            nrTelefon: state.phone,
            esteAdmin: false,
            poza: pozaI,
            managerId: state.managerId
          }
        }
      }).then(resp => (insertDone = resp.data.createUserData))

      insertDone ? addToast(t('EmployeeForm.EmpAdded'), 'success') : addToast(t('EmployeeForm.InsFailed'), 'error')
    } else {
      addToast('Formularul contine erori!', 'error')
    }
  }

  useEffect(() => {
    let validation = validareNume(state.nume)
    console.log('HI')
    let valid = validation.valid,
      err = validation.err
    if (valid === false) {
      dispatchWrapper('numeErr', err)
      dispatchWrapper('isValidNume', false)
    } else {
      dispatchWrapper('numeErr', err)
      dispatchWrapper('isValidNume', true)
    }
  }, [state.nume])
  useEffect(() => {
    let validation = validarePrenume(state.prenume)
    let valid = validation.valid,
      err = validation.err
    if (valid === false) {
      dispatchWrapper('prenumeErr', err)
      dispatchWrapper('isValidPrenume', false)
    } else {
      dispatchWrapper('prenumeErr', err)
      dispatchWrapper('isValidPrenume', true)
    }
  }, [state.prenume])

  useEffect(() => {
    let validation = validareEmail(state.email)
    let valid = validation.valid,
      err = validation.err
    if (valid === false) {
      dispatchWrapper('emailErr', err)
      dispatchWrapper('isValidEmail', false)
    } else {
      dispatchWrapper('emailErr', err)
      dispatchWrapper('isValidEmail', true)
    }
  }, [state.email])
  useEffect(() => {
    let validation = validareParola(state.parola)
    let valid = validation.valid,
      err = validation.err
    if (valid === false) {
      dispatchWrapper('passErr', err)
      dispatchWrapper('isValidPass', false)
    } else {
      dispatchWrapper('passErr', err)
      dispatchWrapper('isValidPass', true)
    }
  }, [state.parola])
  useEffect(() => {
    let validation = validareSerie(state.serie)
    let valid = validation.valid,
      err = validation.err
    if (valid === false) {
      dispatchWrapper('serieErr', err)
      dispatchWrapper('isValidSerie', false)
    } else {
      dispatchWrapper('serieErr', err)
      dispatchWrapper('isValidSerie', true)
    }
  }, [state.serie])
  useEffect(() => {
    let validation = validareNr(state.nr)
    let valid = validation.valid,
      err = validation.err
    if (valid === false) {
      dispatchWrapper('nrErr', err)
      dispatchWrapper('isValidNr', false)
    } else {
      dispatchWrapper('nrErr', err)
      dispatchWrapper('isValidNr', true)
    }
  }, [state.nr])
  useEffect(() => {
    let validation = validarePhone(state.phone)
    let valid = validation.valid,
      err = validation.err
    if (valid === false) {
      dispatchWrapper('phoneNoErr', err)
      dispatchWrapper('isValidPhoneNo', false)
    } else {
      dispatchWrapper('phoneNoErr', err)
      dispatchWrapper('isValidPhoneNo', true)
    }
  }, [state.phone])
  useEffect(() => {
    let validation = validareCnp(state.cnp)
    let valid = validation.valid,
      err = validation.err
    if (valid === false) {
      dispatchWrapper('cnpErr', err)
      dispatchWrapper('isValidCnp', false)
    } else {
      dispatchWrapper('cnpErr', err)
      dispatchWrapper('isValidCnp', true)
    }

    if (state.cnp.length === 13) {
      let validation = verificareDataNastereCnp(state.cnp)
      let valid1 = validation.valid,
        err1 = validation.err
      let validation2 = extractDataNastereFromCnp(state.cnp)
      let valid2 = validation2.valid,
        err2 = validation2.err,
        data = validation2.data
      if (valid1 === true && valid2 === true && valid === true) {
        dispatchWrapper('dataNasterii', data)
        dispatchWrapper('isValidCnp', true)
      } else {
        dispatchWrapper('isValidCnp', false)
      }
      if (valid1 === false) dispatchWrapper('cnpErr', err1)
      else if (valid2 === false) dispatchWrapper('cnpErr', err2)
      else if (valid === false) {
        dispatchWrapper('cnpErr', err)
      }
    }
  }, [state.cnp])

  return (
    <Grid item container className={classesForm.card} xs={12}>
      <h1 className={classesForm.title}>{t('Tooltips.AddEmployee')}</h1>
      <EmployeeForm dispatchWrapper={dispatchWrapper} state={state} handleSave={handleSave} classesForm={classesForm} />
    </Grid>
  )
}

export default AddEmployeeContainer
