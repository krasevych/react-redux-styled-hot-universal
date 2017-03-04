import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const routeInitialState = fromJS({
  locationBeforeTransitions: null
});

export default function routeReducer(state = routeInitialState, { type, payload }) {
  switch (type) {
    case LOCATION_CHANGE:
      return state.merge({ locationBeforeTransitions: payload });
    default:
      return state;
  }
}
