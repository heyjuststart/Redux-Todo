import { connect } from 'react-redux';
import { addTodo, toggleFinish, filterTodos, clearFinished, deleteTodo } from '../actions';

import App from '../App';

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  },
  toggleFinish: id => {
    dispatch(toggleFinish(id));
  },
  filterTodos: text => {
    dispatch(filterTodos(text));
  },
  clearFinished: () => {
    dispatch(clearFinished());
  },
  deleteTodo: id => {
    dispatch(deleteTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
