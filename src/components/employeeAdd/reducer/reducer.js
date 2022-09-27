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
  poza: null
}

export function reducer(state, action) {
  const { propertyName, value } = action
  switch (action.type) {
    case 'OnPropertyChange':
      return { ...state, [propertyName]: value }
    default:
      throw new Error()
  }
}
