import { ADD_TODO } from '../actions';

const initialState = {
  todos: [
    { id: '1', text: 'Do Something1' },
    { id: '2', text: 'Do Something2' },
    { id: '3', text: 'Do Something3' }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    default:
      return state;
  }
};
