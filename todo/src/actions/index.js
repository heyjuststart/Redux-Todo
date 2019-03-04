export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_FINISH = 'TOGGLE_FINISH';


export const addTodo = text => ({
  type: ADD_TODO,
  payload: text
});

export const toggleFinish = id => ({
  type: TOGGLE_FINISH,
  payload: id
});
