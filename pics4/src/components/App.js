import React from "react";
import { SearchBar } from "./SearchBar";
import { Unsplash } from "../services/Unsplash";
import { ImageList } from "../components/ImageList";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async term => {
    const response = await Unsplash("/search/photos", {
      params: { query: term, per_page: 20 }
    });
    this.setState((this.state.images = response.data.results));
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
