import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import {
  setToImmutableStateFunc,
  setToMutableStateFunc,
  immutableReducer as reduxAsyncConnect
} from 'redux-connect';

import routeReducer from './routing';

setToImmutableStateFunc(mutableState => fromJS(mutableState));
setToMutableStateFunc(immutableState => immutableState.toJS());

export default function createReducer() {
  return combineReducers({
    reduxAsyncConnect,
    routing: routeReducer
  });
}
