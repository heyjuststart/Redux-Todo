export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_FINISH = 'TOGGLE_FINISH';
export const FILTER_TODOS = 'FILTER_TODOS';
export const CLEAR_FINISHED = 'CLEAR_FINISHED';
export const DELETE_TODO = 'DELETE_TODO';


export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id
});

export const addTodo = text => ({
  type: ADD_TODO,
  payload: text
});

export const toggleFinish = id => ({
  type: TOGGLE_FINISH,
  payload: id
});

export const filterTodos = text => ({
  type: FILTER_TODOS,
  payload: text
});

export const clearFinished = () => ({
  type: CLEAR_FINISHED
});
