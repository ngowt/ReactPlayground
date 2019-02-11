import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/";

const gAuthParams = {
  client_id:
    "92149856694-jqi6hs0f1o0pmerde9643mtb53b5mu1f.apps.googleusercontent.com"
};

class GAuth extends React.Component {
  componentDidMount = () => {
    this.load();
  };

  load = () => {
    window.gapi.load("auth2", this.init);
  };

  init = () => {
    window.gapi.auth2.init(gAuthParams).then(() => {
      this.auth = window.gapi.auth2.getAuthInstance();
      this.authListener(this.auth.isSignedIn.get());
      this.auth.isSignedIn.listen(this.authListener);
    });
  };

  signInHandler = () => {
    this.auth.signIn();
  };

  signOutHandler = () => {
    this.auth.signOut();
  };

  authListener = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  renderAuthButton = () => {
    const { isSignedIn } = this.props;
    const className = isSignedIn ? "ui button negative" : "ui button primary";
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
    return <div>{this.renderAuthButton()}</div>;
  };
}

const mapStateToProps = (state, ownProps) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GAuth);
