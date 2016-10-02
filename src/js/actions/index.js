import { getFables } from '../data/dao.js';

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

export { requestFables, fetchFables, recieveFables }
