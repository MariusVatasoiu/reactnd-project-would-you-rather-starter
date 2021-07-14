import { connect } from "react-redux";
import QuestionVote from "./QuestionVote";
import QuestionResults from "./QuestionResults";

function QuestionPage(props) {
  const { authedUser, question } = props;

  if (question === null) {
    return (<div className="center">
      <h3>404</h3>
      <p>This question doesn't exists.</p>
    </div>);
  }

  return (
    <div className="page">
      {(question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)) &&
        (<QuestionResults id={question.id} />)}

      {(!question.optionOne.votes.includes(authedUser) &&
        !question.optionTwo.votes.includes(authedUser)) &&
        (<QuestionVote id={question.id} />)}
    </div>
  );
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  return {
    authedUser,
    author: question ? users[question.author] : null,
    question: question ? question : null,
  };
}

export default connect(mapStateToProps)(QuestionPage);
