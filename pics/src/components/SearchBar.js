import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <input
            onChange={e => this.setState({ term: e.target.value })}
            type="text"
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}
