import { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = { user: "" };

  componentDidMount() {
    this.props.dispatch(setAuthedUser(null));
  }

  handleChange = (event) => {
    const user = event.target.value;
    const { dispatch, history, location } = this.props;

    dispatch(setAuthedUser(user));

    const { from } = location.state || { from: { pathname: "/" } };
    history.replace(from);
  };

  render() {
    const { users } = this.props;

    return (
      <div className="page center">
        <h1>Login</h1>

        <select value={this.state.user} onChange={this.handleChange}>
          <option>-Please select an user -</option>
          {users.map((
            user,
          ) => (<option key={user.id} value={user.id}>{user.name}</option>))}
        </select>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps)(Login);
