import React from "react";
import { SearchBar } from "./SearchBar";
import { ImageList } from "./ImageList";
import { Unsplash } from "../services/Unsplash";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSubmitHandler = async term => {
    const response = await Unsplash(`/search/photos`, {
      params: { query: term, per_page: 20 }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmitHandler} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
