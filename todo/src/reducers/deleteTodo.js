export default (state, action) => {
  const foundIndex = state.todos.findIndex(t => t.id === action.payload);
  if (foundIndex > -1) {
    return { ...state, todos: [
      ...state.todos.slice(0, foundIndex),
      ...state.todos.slice(foundIndex + 1)
    ]};
  }

  return state;
};

