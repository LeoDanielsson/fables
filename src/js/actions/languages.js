import { getLanguages } from '../data/dao';

export const RECIEVE_LANGUAGES = 'RECIEVE_LANGUAGES';
export const REQUEST_LANGUAGES = 'REQUEST_LANGUAGES';
export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';

function recieveLanguages(languages) {
  return {
    type: RECIEVE_LANGUAGES,
    languages,
  }
}

function requestLanguages() {
  return { type: REQUEST_LANGUAGES };
}

function fetchLanguages() {
  return dispatch => {
    dispatch(requestLanguages());
    return getLanguages().then(languagesData => {
      dispatch(recieveLanguages(languagesData))
    });
  }
}

function selectLanguage(languageId) {
  return { type: SELECT_LANGUAGE, languageId };
}

export {
    requestLanguages,
    fetchLanguages,
    recieveLanguages,
    selectLanguage,
}
