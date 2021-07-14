import { connect } from "react-redux";
import QuestionPreview from "./QuestionPreview";

function Dashboard(props) {
  const { unansweredQuestions, answeredQuestions } = props;
  console.log("unansweredQuestions", unansweredQuestions);
  console.log("answeredQuestions", answeredQuestions);
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <div className="dashboard">
        <div>
          <h2>Unanswered Questions</h2>
          {unansweredQuestions.map((
            q,
          ) => (<QuestionPreview key={q.id} id={q.id} />))}
        </div>
        <div>
          <h2>Answered Questions</h2>
          {answeredQuestions.map((
            q,
          ) => (<QuestionPreview key={q.id} id={q.id} />))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser, questions }) {
  return {
    unansweredQuestions: Object.values(questions).filter((q) =>
      !q.optionOne.votes.includes(authedUser) &&
      !q.optionTwo.votes.includes(authedUser)
    ),
    answeredQuestions: Object.values(questions).filter((q) =>
      q.optionOne.votes.includes(authedUser) ||
      q.optionTwo.votes.includes(authedUser)
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
