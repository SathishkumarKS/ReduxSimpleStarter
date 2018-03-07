import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';

class NewPost extends Component {
  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    console.log('title', title);
    return (<div>
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new Post</h3>
        <div className="form-group">
          <span>Title</span>
          <input type="text" className="form-control" {...title} />
        </div>
        <div className="form-group">
          <span>Categories</span>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <span>Content</span>
          <textarea type="text" className="form-control" {...content} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    </div>);
  }
}

export default reduxForm({
  form: 'NewPost',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(NewPost);
