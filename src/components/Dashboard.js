import { Component } from "react";
import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";

class Dashboard extends Component {
  state = { selectedView: "unanswared" };

  changeView = (event) => {
    this.setState({
      selectedView: event.target.name,
    });
  };

  render() {
    const { selectedView } = this.state;
    const { unansweredQuestions, answeredQuestions } = this.props;
    return (
      <div className="page">
        <div className="dashboard-category">
          <ul>
            <li>
              <button
                name="unanswared"
                className={selectedView === "unanswared" ? "view-active" : ""}
                onClick={this.changeView}
              >
                Unanswared Questions
              </button>
            </li>
            <li>
              <button
                name="answared"
                className={selectedView === "answared" ? "view-active" : ""}
                onClick={this.changeView}
              >
                Answer Questions
              </button>
            </li>
          </ul>
        </div>
        <div className="dashboard-view">
          {selectedView === "unanswared" && (unansweredQuestions.map((
            q,
          ) => (<QuestionPreview key={q.id} id={q.id} />)))}

          {selectedView === "answared" && (answeredQuestions.map((
            q,
          ) => (<QuestionPreview key={q.id} id={q.id} />)))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    unansweredQuestions: Object.values(questions).filter((q) =>
      !q.optionOne.votes.includes(authedUser) &&
      !q.optionTwo.votes.includes(authedUser)
    ).sort((a, b) => b.timestamp - a.timestamp),
    answeredQuestions: Object.values(questions).filter((q) =>
      q.optionOne.votes.includes(authedUser) ||
      q.optionTwo.votes.includes(authedUser)
    ).sort((a, b) => b.timestamp - a.timestamp),
  };
}

export default connect(mapStateToProps)(Dashboard);
