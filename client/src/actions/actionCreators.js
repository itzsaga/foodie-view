// increment
function increment (itemId) {
  return {
    type: 'INCREMENT_LIKES',
    itemId
  }
}

// add comment
function addComment (itemId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    itemId,
    author,
    comment
  }
}

// remove comment
function removeComment (itemId, i) {
  return {
    type: 'REMOVE_COMMENT',
    itemId,
    i
  }
}
