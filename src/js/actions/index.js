import { getFables, getLanguages } from '../data/dao.js';

function recieveFables(fables) {
  return {
    type: 'RECIEVE_FABLES',
    fables,
  }
}

function requestFables() {
  return { type: 'REQUEST_FABLES'};
}

function fetchFables() {
  return dispatch => {
    dispatch(requestFables());
    return getFables().then(fablesData => {
      dispatch(recieveFables(fablesData))
    });
  }
}

function recieveLanguages(languages) {
  return {
    type: 'RECIEVE_LANGUAGES',
    languages,
  }
}

function requestLanguages() {
  return { type: 'REQUEST_LANGUAGES'};
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
  return { type: 'SELECT_LANGUAGE', languageId };
}

function openModal(text) {
  return { type: 'OPEN_MODAL', text };
}

function closeModal() {
  return { type: 'CLOSE_MODAL' };
}

export {
  requestFables,
  fetchFables,
  recieveFables,
  requestLanguages,
  fetchLanguages,
  recieveLanguages,
  selectLanguage,
  openModal,
  closeModal
}
