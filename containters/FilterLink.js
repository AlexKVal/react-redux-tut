import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

function mapDispatchProps(dispatch, ownProps) {
  return {
    onClick() {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default const FilterLink = connect(
  mapStateToProps,
  mapDispatchProps,
)(Link)
