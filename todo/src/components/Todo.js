import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  return <div className="todo">{ todo.text }</div>;
};

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired
  })
};

export default Todo;
