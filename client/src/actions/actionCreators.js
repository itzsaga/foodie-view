import fetch from 'isomorphic-fetch'

// add comment
export function addComment (id, author, comment) {
  return {
    type: 'ADD_COMMENT',
    id,
    author,
    comment
  }
}

// remove comment
export function removeComment (id, i) {
  return {
    type: 'REMOVE_COMMENT',
    id,
    i
  }
}

// fetch places
export function fetchPlaces () {
  console.log('fetching places')
  return (dispatch) => {
    dispatch({type: 'LOADING_PLACES'})
    return fetch('/places')
      .then(response => response.JSON)
      .then(responseJSON => {
        dispatch({type: 'FETCH_PLACES', payload: responseJSON})
      })
  }
}
