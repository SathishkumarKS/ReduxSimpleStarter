import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPost } from '../actions/index';

class PostDetail extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.postId);
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.currentPost
  };
}
export default connect(mapStateToProps, { fetchPost })(PostDetail);
