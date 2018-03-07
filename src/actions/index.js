import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

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
export function fetchPost(postId) {
  const request = axios.get(`${BASE_URL}/posts/${postId}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}
export function deletePost(postId) {
  const request = axios.delete(`${BASE_URL}/posts/${postId}${API_KEY}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}
