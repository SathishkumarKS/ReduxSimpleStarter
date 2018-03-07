import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import PostDetail from './components/PostDetail';

export default(
  <Route path='/' component={App}>
    <IndexRoute component={Posts} />
    <Route path="posts/new" component={NewPost} />
    <Route path="posts/:postId" component={PostDetail} />
  </Route>
);
