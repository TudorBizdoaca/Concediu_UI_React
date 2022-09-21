import { differenceInBusinessDays } from 'date-fns'

export const initialState = {
  dataInceput: new Date(),
  dataFinal: new Date(),
  totalZileDisponibile: 21,
  totalZileSolicitate: 0
}
export function reducer(state, action) {
  var dayOfWeek = state.dataFinal.getDay()
  switch (action.type) {
    case 'datePicker1':
      state.dataInceput = action.e
      state.totalZileSolicitate = differenceInBusinessDays(state.dataFinal, state.dataInceput)
      if (dayOfWeek != 6 && dayOfWeek != 0) state.totalZileSolicitate = state.totalZileSolicitate + 1
      return { ...state }
    case 'datePicker2':
      state.totalZileSolicitate = differenceInBusinessDays(action.e, state.dataInceput)
      if (dayOfWeek != 6 && dayOfWeek != 0) state.totalZileSolicitate = state.totalZileSolicitate + 1
      return { ...state, dataFinal: action.e }
    default:
      throw new Error()
  }
}
