import { REQUEST_FABLES, RECIEVE_FABLES } from '../actions';

function fables(state = {}, action) {
  switch(action.type) {
    case REQUEST_FABLES:
      return {
        ...state,
        isFetching: true
      };
    case RECIEVE_FABLES:
      return {
        ...state,
        fables: action.fables,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default fables;
