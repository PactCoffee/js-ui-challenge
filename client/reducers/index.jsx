
import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';
import user from './user';

export default combineReducers({
  routing,
  user
});
