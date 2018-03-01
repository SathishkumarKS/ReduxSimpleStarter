import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<ul className="list-group col-sm-4">
      {
        this.props.books.map(book => {
          return (<li onClick={() => this.props.selectBook(book)} key={book.title} className="list-group-item">
            {book.title}
          </li>);
        })
      }
    </ul>);
  }
}

function mapStateToProps(state) {
  console.log('State', state);
  return {books: state.books};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
