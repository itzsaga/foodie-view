import React from 'react'

class Comments extends React.Component {
  renderComment (comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { id } = this.props.match.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(id, author, comment)
  }
  render () {
    return (
      <div className='comments'>
        {this.props.restaurantComments.map(this.renderComment)}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}

export default Comments
