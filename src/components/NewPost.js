import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { createPost } from '../actions/index';

class NewPost extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(formData) {
    this.props.createPost(formData)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (<div>
      <form onSubmit={handleSubmit(formData => this.onSubmit(formData))}>
        <h3>Create a new Post</h3>
        <div className={`form-group ${title.touched && title.error ? 'has-danger' : ''}`}>
          <span>Title</span>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.error ? 'has-danger' : ''}`}>
          <span>Categories</span>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.error ? 'has-danger' : ''}`}>
          <span>Content</span>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    </div>);
  }
}
function validate(values) {
    const errors = {};
    if (!values.title) {
      errors.title = 'Please enter title for the blog post';
    }
    if (!values.categories) {
      errors.categories = 'Please enter the Categories for the blog post';
    }
    if (!values.content) {
      errors.content = 'Please enter the content for the blog post';
    }
    return errors;
}

export default reduxForm({
  form: 'NewPost',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(NewPost);
