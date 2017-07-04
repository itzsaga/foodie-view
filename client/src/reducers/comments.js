// TODO: Implement 'REMOVE_COMMENT'

function restaurantComments (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    // case 'REMOVE_COMMENT':
    //   console.log('Removing a comment.')
    //   return state
    default:
      return state
  }
}
function comments (state = [], action) {
  if (typeof action.id !== 'undefined') {
    return {
      ...state,
      [action.id]: restaurantComments(state[action.id], action)
    }
  }
  return state
}

export default comments
