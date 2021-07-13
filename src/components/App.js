import { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import Nav from "./Nav";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Nav />

            <PrivateRoute path="/" exact component={Dashboard} />
            <PrivateRoute path="/question/:id" component={QuestionPage} />
            <PrivateRoute path="/new" component={NewQuestion} />
            <PrivateRoute path="/leader-board" component={LeaderBoard} />
            <Route path="/login" component={Login} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
