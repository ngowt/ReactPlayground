import React from "react";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";

class GoogleAuth extends React.Component {
  componentDidMount = () => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id: ""
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.authHandler(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.authHandler);
        });
    });
  };

  authHandler = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  signOutHandler = () => {
    this.auth.signOut();
  };

  signInHandler = () => {
    this.auth.signIn();
  };

  renderAuthenticateButton = () => {
    const className = this.props.isSignedIn
      ? "ui button negative"
      : "ui button primary";
    const buttonText = this.props.isSignedIn ? "Sign Out" : "Sign In";
    const handler = this.props.isSignedIn
      ? this.signOutHandler
      : this.signInHandler;
    return (
      <button onClick={handler} className={className}>
        <i className="google icon" />
        {buttonText}
      </button>
    );
  };

  render = () => {
    return (
      <div>
        <h3 className="ui block header">{this.renderAuthenticateButton()}</h3>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);

/*
Client Id 92149856694-jqi6hs0f1o0pmerde9643mtb53b5mu1f.apps.googleusercontent.com
*/
