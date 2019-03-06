import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, toggleFinish, deleteTodo }) => {
  return (
    <div>
      <div
        className={`todo ${todo.finished && 'finished'}`}
        onClick={() => toggleFinish(todo.id)}
      >
        {todo.text}
      </div>
      <button onClick={() => deleteTodo(todo.id)}>x</button>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    finished: PropTypes.bool.isRequired
  }),
  toggleFinish: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todo;
