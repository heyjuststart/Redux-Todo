import { TOGGLE_FINISH, ADD_TODO } from '../actions';
import toggleFinish from './toggleFinish';

let idCounter = 3;
const generateId = () => {
  idCounter++;
  return idCounter;
};

const initialState = {
  todos: [
    { id: '1', text: 'Do Something1', finished: false },
    { id: '2', text: 'Do Something2', finished: false },
    { id: '3', text: 'Do Something3', finished: false }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: generateId(), text: action.payload }]
      };
    case TOGGLE_FINISH:
      return toggleFinish(state, action);
    default:
      return state;
  }
};
