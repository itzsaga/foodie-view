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
