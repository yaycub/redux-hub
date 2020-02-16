import { combineReducers } from 'redux';
import userData from './userReducer';
import repoData from './reposReducer';

export default combineReducers({
  userData,
  repoData
});
