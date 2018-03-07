import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Mu6fRNarQt74WDwt';

export function fetchPosts() {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
export function createPost(newPost) {
  const request = axios.post(`${BASE_URL}/posts${API_KEY}`, newPost);
  return {
    type: CREATE_POST,
    payload: request
  };
}
