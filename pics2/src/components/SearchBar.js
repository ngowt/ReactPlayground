import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="ui form">
        <div className="field">
          <input
            onChange={e => this.setState({ term: e.target.value })}
            type="text"
            placeholder="Search..."
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
