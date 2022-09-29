export function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        employee: action.employee
      }
    case 'edit':
      return {
        ...state,
        isEditing: action.isEditing
      }
    case 'onchange':
      return {
        ...state,
        employee: { ...state.employee, [action.propname]: action.value }
      }
    default:
      return state
  }
}
