export function reducer(state, action) {
  switch (action.type) {
    case 'update':
      return {
        ...state,
        results: action.results,
        totalItems: action.totalItems
      }
    case 'query':
      return {
        ...state,
        query: action.query,
        startIndex: 0,
        page: 1
      }
    case 'pagination':
      return {
        ...state,
        page: action.page,
        startIndex: (action.page - 1) * 12
      }
    default:
      return state
  }
}
