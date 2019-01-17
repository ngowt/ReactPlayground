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
      <div>
        <div className="ui input">
          <form className="ui form" onSubmit={this.onSubmitHandler}>
            <input
              onChange={e => this.setState({ term: e.target.value })}
              type="text"
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
    );
  }
}
