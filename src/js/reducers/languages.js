import { REQUEST_LANGUAGES, RECIEVE_LANGUAGES, SELECT_LANGUAGE } from '../actions';

function languages(state = {}, action) {
  switch(action.type) {
    case REQUEST_LANGUAGES:
      return {
        ...state,
        isFetching: true
      };
    case RECIEVE_LANGUAGES:
      return {
        ...state,
        languages: action.languages,
        isFetching: false
      };
    case SELECT_LANGUAGE:
      return {
        ...state,
        selected: action.languageId
      };
    default:
      return state;
  }
}

export default languages;
