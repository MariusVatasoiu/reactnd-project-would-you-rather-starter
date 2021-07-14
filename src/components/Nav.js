import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leader Board
          </NavLink>
        </li>

        {props.authedUser && (
          <li>
            <strong>{props.user.name}</strong> |
            <NavLink to="/login" activeClassName="active">Logout</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(Nav);
