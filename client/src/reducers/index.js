import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counterReducer from './counterReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  todos: todosReducer,
  counter: counterReducer,
  form: formReducer,
});
