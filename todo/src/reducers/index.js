import { TOGGLE_FINISH, ADD_TODO, FILTER_TODOS, CLEAR_FINISHED, DELETE_TODO } from '../actions';
import toggleFinish from './toggleFinish';
import deleteTodo from './deleteTodo';

let idCounter = 10;
const generateId = () => {
  idCounter++;
  return idCounter;
};

const initialState = {
  todos: [
    { id: '1', text: 'Do Something1', finished: false },
    { id: '2', text: 'Do Something2', finished: false },
    { id: '3', text: 'Do Something3', finished: false },
    { id: '4', text: 'Do Something4', finished: false },
    { id: '5', text: 'Do Something5', finished: false },
    { id: '6', text: 'Do Something6', finished: false }
  ],
  filter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return deleteTodo(state, action);
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: generateId(), text: action.payload, finished: false }
        ]
      };
    case TOGGLE_FINISH:
      return toggleFinish(state, action);
    case FILTER_TODOS:
      return { ...state, filter: action.payload };
    case CLEAR_FINISHED:
      return { ...state, todos: state.todos.filter(t => !t.finished) };
    default:
      return state;
  }
};
