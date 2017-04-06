import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import info from './info';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  info,
  form: formReducer
});
