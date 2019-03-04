import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ onAddTodo }) => {
  const [text, setText] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onAddTodo(text);
      }}
    >
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </form>
  );
};

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default TodoForm;
