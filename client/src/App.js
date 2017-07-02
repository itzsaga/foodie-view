import React, { Component } from 'react'

// Components
import Main from './components/Main'

// CSS
import 'mini.css'

class App extends Component {
  render () {
    return (
      <div>
        <Main />
        <p>This is a paragraph with some <strong>bold text</strong> and some <em>italics text</em>.</p>
        <a href="#">This is a link.</a>
        <small>This is some small text.</small>
        <sub>Subscript</sub>
        <sup>Superscript</sup>
        <code>Inline code</code>
        <kbd>Keyboard Input</kbd>
        <hr />
        <pre>This is some preformatted text.</pre>
        <blockquote cite="www.quotation.source">
          This is some quoted text from another website or person.
        </blockquote>
      </div>
    )
  }
}

export default App
