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
      <div className="ui inverted segment">
        <div className="ui inverted form">
          <div className="field">
            <form onSubmit={this.onSubmitHandler}>
              <input
                onChange={e => this.setState({ term: e.target.value })}
                placeholder="Search..."
                type="text"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
