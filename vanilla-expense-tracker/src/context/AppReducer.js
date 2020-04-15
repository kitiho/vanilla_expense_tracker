export default (state, action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    case 'DELETE_ACTIONS':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      }
    case 'ADD_ACTIONS':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      }
    default:
      return state
  }
}
