function modal(state = {}, action) {
  switch(action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
        text: action.text
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
        text: ''
      };
    default:
      return state;
  }
}

export default modal;
