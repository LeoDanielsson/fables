function fables(state = {}, action) {
  console.log(state);
  switch(action.type) {
    case 'REQUEST_FABLES':
      return {
        ...state,
        isFetching: true
      };
    case 'RECIEVE_FABLES':
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
