import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  onChangeHandler = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} className="ui form">
          <div className="ui fluid icon input">
            <input
              onChange={this.onChangeHandler}
              type="text"
              placeholder="Search..."
              value={this.state.term}
            />
            <i className="search icon" />
          </div>
        </form>
      </div>
    );
  }
}
