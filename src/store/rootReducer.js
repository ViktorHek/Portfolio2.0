import initialState from './initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        homePage: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer
