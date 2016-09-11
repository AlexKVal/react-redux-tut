// @flow

import React, { PropTypes } from 'react'

const Todo = ({onClick, completed, text}: {
  onClick: Function,
  completed: boolean,
  text: string
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'non'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
