export default (state, action) => {
  const newTodos = [...state.todos];
  const foundTodo = newTodos.find(t => t.id === action.payload);
  if (foundTodo) {
    foundTodo.finished = !foundTodo.finished;
    return { ...state, todos: newTodos };
  }

  return state;
};
