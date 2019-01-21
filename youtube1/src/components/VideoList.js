import React from "react";
import { VideoItem } from "./VideoItem";

export class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const videoList = this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoClick={this.props.onVideoClick}
          video={video}
        />
      );
    });
    return (
      <div className="six wide column ui relaxed divided list">{videoList}</div>
    );
  }
}
