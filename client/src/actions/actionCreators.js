// increment
export function increment (itemId) {
  return {
    type: 'INCREMENT_LIKES',
    itemId
  }
}

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
export function removeComment (itemId, i) {
  return {
    type: 'REMOVE_COMMENT',
    itemId,
    i
  }
}
