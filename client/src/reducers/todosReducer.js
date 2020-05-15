import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  todos: [],
  getAllTodosError: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_TODOS:
      return {...state, todos: action.payload, getAllTodosError: '' };
    case GET_ALL_TODOS_ERROR:
      return {...state, getAllTodosError: action.payload };
    default:
      return state;
  }
}
