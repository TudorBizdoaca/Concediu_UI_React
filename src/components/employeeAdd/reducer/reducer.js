export const initialState = {
  dataAngajarii: new Date()
}

export function reducer(state, action) {
  switch (action.type) {
    case 'DateChange':
      state.dataAngajarii = action.e
      return { ...state }
    default:
      throw new Error()
  }
}
