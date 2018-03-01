import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearcBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = "AIzaSyDnJZtR41Pibh2LMAEBnyc6B88AqqSWuqY";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("Badminton tactics")
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term
    }, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }

  render() {
    return (<div>
      <SearchBar onSearchTermChange={_.debounce(term => {this.videoSearch(term)}, 500)} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
    </div>);
  }
}
ReactDOM.render(<App/>, document.querySelector(".container"));
