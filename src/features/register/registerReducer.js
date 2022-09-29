export const initialState = {
  nume: '',
  prenume: '',
  cnp: '',
  email: '',
  parola: '',
  serie: '',
  nr: '',
  phone: '',
  dataAngajarii: null,
  dataNasterii: null,
  poza: null,
  isValidNume: true,
  isValidPrenume: true,
  isValidCnp: true,
  isValidDataNastere: true,
  isValidDataAngajare: true,
  isValidSerie: true,
  isValidNr: true,
  isValidEmail: true,
  isValidPass: true,
  isValidPhoneNo: true,
  numeErr: '',
  prenumeErr: '',
  cnpErr: '',
  dataNastereErr: '',
  dataAngajareErr: '',
  serieErr: '',
  nrErr: '',
  emailErr: '',
  passErr: '',
  phoneNoErr: ''
}

export function registerReducer(state, action) {
  const { propertyName, value } = action
  switch (action.type) {
    case 'OnPropertyChange':
      return { ...state, [propertyName]: value }
    default:
      return state
  }
}
