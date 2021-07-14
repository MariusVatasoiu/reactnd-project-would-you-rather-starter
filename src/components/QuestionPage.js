import { connect } from "react-redux";
import QuestionVote from "./QuestionVote";
import QuestionResults from "./QuestionResults";

function QuestionPage(props) {
  console.log("Q-ID", props.id);
  const { authedUser, question } = props;
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
    author: users[question.author],
    question: question ? question : null,
  };
}

export default connect(mapStateToProps)(QuestionPage);
