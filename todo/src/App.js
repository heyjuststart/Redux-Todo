import React from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

export default ({ todos, addTodo, toggleFinish }) => (
  <div className="App">
    <h1>Hello</h1>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} toggleFinish={toggleFinish}/>
    ))}
    <TodoForm onAddTodo={addTodo} />
  </div>
);
