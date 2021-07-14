import { Component } from "react";
import { connect } from "react-redux";

class QuestionResults extends Component {
  render() {
    console.log("Q-ID", this.props.id);
    const { author, authedUser, question } = this.props;
    const oneVotes = question.optionOne.votes.length;
    const twoVotes = question.optionTwo.votes.length;
    const totalVotes = oneVotes + twoVotes;
    const onePercentage = parseInt((oneVotes / totalVotes) * 100);
    const twoPercentage = parseInt((twoVotes / totalVotes) * 100);
    return (
      <div className="page">
        <h3>Asked by {author.name}</h3>

        <div className="result-container">
          <div className="result-avatar">
            <img className="avatar" src={author.avatarURL} alt={author.name} />
          </div>
          <div className="result-main">
            <h4>Results:</h4>
            <section
              className={question.optionOne.votes.includes(authedUser)
                ? "voted"
                : ""}
            >
              <p>
                <strong>Would you rather {question.optionOne.text}?</strong>
              </p>
              <p>
                <small>
                  {oneVotes} out of {totalVotes} votes ({onePercentage}%)
                </small>
              </p>
            </section>
            <section
              className={question.optionTwo.votes.includes(authedUser)
                ? "voted"
                : ""}
            >
              <p>
                <strong>Would you rather {question.optionTwo.text}?</strong>
              </p>
              <p>
                <small>
                  {twoVotes} out of {totalVotes} votes ({twoPercentage}%)
                </small>
              </p>
            </section>
          </div>
        </div>
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

export default connect(mapStateToProps)(QuestionResults);
