import React from "react";
import { signIn, signOut } from "../actions/";
import { connect } from "react-redux";

const gAuthParams = {
  client_id:
    "92149856694-jqi6hs0f1o0pmerde9643mtb53b5mu1f.apps.googleusercontent.com"
};

class GoogleAuth extends React.Component {
  componentDidMount = () => {
    this.loadClient();
  };

  loadClient = () => {
    window.gapi.load("auth2", this.initClient);
  };

  initClient = () => {
    window.gapi.auth2.init(gAuthParams).then(() => {
      this.auth = window.gapi.auth2.getAuthInstance();
      this.authListener(this.auth.isSignedIn.get());
      this.auth.isSignedIn.listen(this.authListener);
    });
  };

  authListener = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  signInHandler = () => {
    this.auth.signIn();
  };

  signOutHandler = () => {
    this.auth.signOut();
  };

  renderButton = () => {
    const { isSignedIn } = this.props;
    const className = isSignedIn ? "ui button primary" : "ui button negative";
    const handler = isSignedIn ? this.signOutHandler : this.signInHandler;
    const text = isSignedIn ? "Sign Out" : "Sign In";
    return (
      <button className={className} onClick={handler}>
        <div className="content">
          <i className="google plus icon" />
          {text}
        </div>
      </button>
    );
  };

  render = () => {
    return <div>{this.renderButton()}</div>;
  };
}

const mapStateToProps = (state, ownProps) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
