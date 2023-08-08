import { combineReducers } from 'redux';
import todoReducer from './todoreducers';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
