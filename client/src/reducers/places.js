export default function places (state = [], action) {
  switch (action.type) {
    case 'FETCH_PLACES':
      return state
    case 'FETCH_PLACES_ERROR':
      return { ...state, error: action.payload }
    case 'RECEIVED_PLACES':
      return {
        ...state,
        restaurants: action.payload
      }
    case 'FETCH_YELP':
      return state
    case 'FETCH_YELP_PLACES_ERROR':
      return { ...state, error: action.payload }
    case 'RECEIVED_YELP_PLACES':
      return {
        ...state,
        restaurants: action.payload
      }
    default:
      return state
  }
}
