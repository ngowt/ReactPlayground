import React from "react";
import { Unsplash } from "../services/Unsplash";
import { SearchBar } from "../components/SearchBar";
import { ImageList } from "../components/ImageList";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSubmitHandler = async term => {
    const response = await Unsplash(`/search/photos`, {
      params: { query: term, per_page: 15 }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSubmitHandler} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
