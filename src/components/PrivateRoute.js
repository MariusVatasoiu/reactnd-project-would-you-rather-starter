import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ component: Component, authedUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        authedUser ? <Component {...props} /> : <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )}
    />
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
