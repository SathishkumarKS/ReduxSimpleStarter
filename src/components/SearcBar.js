import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="search-bar">
      <input onChange={event => this.props.onSearchTermChange(event.target.value)}/>
    </div>);
  }
}

export default SearchBar;
