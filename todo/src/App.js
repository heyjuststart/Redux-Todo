import React from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

export default ({
  todos,
  addTodo,
  filter,
  toggleFinish,
  filterTodos,
  clearFinished,
  deleteTodo
}) => (
  <div className="App">
    <h1>Hello</h1>
    <TodoForm onSubmit={filterTodos} onChange={filterTodos} />
    {todos
      .filter(t => t.text.indexOf(filter) > -1)
      .map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleFinish={toggleFinish}
          deleteTodo={deleteTodo}
        />
      ))}
    <TodoForm onSubmit={addTodo} clearOnSubmit />
    <button onClick={clearFinished}>Clear Finished</button>
  </div>
);
