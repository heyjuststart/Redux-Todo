import { connect } from 'react-redux';
import { addTodo, toggleFinish } from '../actions';

import App from '../App';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  },
  toggleFinish: id => {
    dispatch(toggleFinish(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
