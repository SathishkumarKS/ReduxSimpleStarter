import React from 'react';
import VideoListItem from './VideoListItem'

const VideoList = ({videos, onVideoSelect}) => {
  return (
    <ul className="col-md-4 list-group">
      {
        videos.map(video => {
          return <VideoListItem
            video={video}
            key={video.etag}
            onVideoSelect={onVideoSelect}
          />
        })
      }
    </ul>
  );
}

export default VideoList;
