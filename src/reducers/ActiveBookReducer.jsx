export default function(state = {}, action) {
  switch (action.type) {
    case 'SELECT_BOOK':
      return action.book;
    default:
      return state;
  }
}
