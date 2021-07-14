import { Component } from "react";
import { connect } from "react-redux";

class QuestionVote extends Component {
  render() {
    console.log("Q-ID", this.props.id);
    const { author, authedUser, question } = this.props;
    return (
      <div className="page">
        <h3>{author.name} asks:</h3>
        <img className="avatar" src={author.avatarURL} alt={author.name} />
        <h4>Would You Rather ...</h4>
        <p>{question.optionOne.text}</p>
        <p>{question.optionTwo.text}</p>
        <button>Submit</button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  return {
    authedUser,
    author: users[question.author],
    question: question ? question : null,
  };
}

export default connect(mapStateToProps)(QuestionVote);
