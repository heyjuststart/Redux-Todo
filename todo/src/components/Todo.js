import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, toggleFinish }) => {
  return (
    <div
      className={`todo ${todo.finished && 'finished'}`}
      onClick={() => toggleFinish(todo.id)}
    >
      {todo.text}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    finished: PropTypes.bool.isRequired
  }),
  toggleFinish: PropTypes.func.isRequired
};

export default Todo;
