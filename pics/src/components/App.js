import React from "react";
import { SearchBar } from "./SearchBar";
import { ImageList } from "./ImageList";
import { unsplash } from "../services/unsplash";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  handleSubmit = async term => {
    const response = await unsplash("/search/photos", {
      params: {
        query: term,
        per_page: 20
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
