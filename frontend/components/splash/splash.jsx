import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
        </div>
      );
    } else if (this.props.location.pathname !== "/") {
      return (
        <div></div>
      );
    } else {
      return (
        <div className="splash"
          >
          <header
            className="splash-header"
            >
            <h2>Chores made easy.</h2>
              <h3>Split Chores. Live Better Together.</h3>
              <Link to="/signup" id="link-to-login"
                className="splash-demo-button"
                >
                Get Started Here!
              </Link>
          </header>
        </div>
      );
    }
  }
}
export default Splash;
