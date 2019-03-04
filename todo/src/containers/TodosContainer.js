import { connect } from 'react-redux';
import { addTodo } from '../actions';

import App from '../App';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => {
    dispatch(addTodo(todo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
