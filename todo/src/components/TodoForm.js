import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ onSubmit, onChange, clearOnSubmit }) => {
  const [text, setText] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text);
        clearOnSubmit && setText('');
      }}
    >
      <input type="text" value={text} onChange={e => {
        onChange && onChange(e.target.value);
        setText(e.target.value);
      }}/>
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TodoForm;
