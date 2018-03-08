import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function (state = { all: [], currentPost: {} }, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case FETCH_POST: {
      const post = _.mapKeys(state.all, 'id')[action.postId];
      return { ...state, currentPost: post };
    }
    default:
      return state;
  }
}
