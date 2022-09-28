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
  results: [],
  managerId: 0
}

export function reducer(state, action) {
  const { propertyName, value } = action
  switch (action.type) {
    case 'OnPropertyChange':
      return { ...state, [propertyName]: value }
    case 'manageri':
      return { ...state, results: action.results }
    default:
      return state
  }
}
