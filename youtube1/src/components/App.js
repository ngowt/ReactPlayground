import React from "react";
import { SearchBar } from "./SearchBar";
import { VideoList } from "./VideoList";
import { VideoPlayer } from "./VideoPlayer";
import { Youtube } from "../services/Youtube";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: undefined };
  }

  onVideoClickHandler = video => {
    this.setState({ selectedVideo: video });
  };

  onSearchSubmitHandler = async term => {
    const response = await Youtube("/search/", {
      params: {
        part: "snippet",
        maxResults: 5,
        q: term,
        type: "video"
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmitHandler} />
        <div className="ui grid">
          <VideoPlayer video={this.state.selectedVideo} />
          <VideoList
            onVideoClick={this.onVideoClickHandler}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}
