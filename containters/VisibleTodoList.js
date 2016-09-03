import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

function mapDispatchProps(dispatch) {
  return {
    onTodoClick(id) {
      dispatch(toggleTodo(id))
    }
  }
}

export default const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchProps,
)(TodoList)
