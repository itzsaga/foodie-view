// increment
export function increment (itemId) {
  return {
    type: 'INCREMENT_LIKES',
    itemId
  }
}

// add comment
export function addComment (itemId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    itemId,
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
