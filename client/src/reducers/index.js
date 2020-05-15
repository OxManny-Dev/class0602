import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counterReducer from './counterReducer';

export default combineReducers({
  counter: counterReducer,
  form: formReducer
});
