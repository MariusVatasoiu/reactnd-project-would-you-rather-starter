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
          <NavLink to="/new" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leader-board" activeClassName="active">
            Leader Board
          </NavLink>
        </li>

        {props.authedUser && (
          <li>
            <strong>{props.authedUser}</strong> |
            <NavLink to="/login" activeClassName="active">Logout</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Nav);
