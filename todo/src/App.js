import React from 'react';
import './App.css';
import Todo from './components/Todo';

export default ({ todos }) => (
  <div className="App">
    <h1>Hello</h1>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </div>
);
