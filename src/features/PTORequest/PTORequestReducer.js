import { differenceInBusinessDays } from 'date-fns'

export const initialState = {
  dataInceput: new Date(),
  dataFinal: new Date(),
  totalZileDisponibile: 21,
  totalZileSolicitate: 0,
  idTipConcediu: 0,
  idInlocuitor: 0,
  comentarii: ''
}
export function reducer(state, action) {
  var dayOfWeek = state.dataFinal.getDay()
  switch (action.type) {
    case 'changeHandler':
      state[action.stateField] = action.onChangeParam //state update

      //logica pentru zileConcediuSolicitate

      if (action.stateField == 'dataInceput' || action.stateField == 'dataFinal')
        state.totalZileSolicitate = differenceInBusinessDays(state.dataFinal, state.dataInceput)
      if (dayOfWeek != 6 && dayOfWeek != 0 && (action.stateField == 'dataInceput' || action.stateField == 'dataFinal'))
        state.totalZileSolicitate = state.totalZileSolicitate + 1
      return { ...state }
    default:
      throw new Error()
  }
}
