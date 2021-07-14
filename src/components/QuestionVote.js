import { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";

class QuestionVote extends Component {
  state = {
    answer: "",
  };

  handleChange = (event) => {
    this.setState({ answer: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { answer } = this.state;
    if (answer === "") {
      return;
    }

    const { dispatch, question } = this.props;

    dispatch(handleAnswerQuestion(question.id, answer));
  };

  render() {
    const { author, question } = this.props;
    return (
      <div className="page">
        <h3>{author.name} asks:</h3>
        <div className="vote-container">
          <div className="vote-avatar">
            <img className="avatar" src={author.avatarURL} alt={author.name} />
          </div>
          <div className="vote-main">
            <h4>Would You Rather ...</h4>

            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  type="radio"
                  id="optionOne"
                  name="option"
                  value="optionOne"
                  onChange={this.handleChange}
                />
                <label htmlFor="optionOne">{question.optionOne.text}</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="optionTwo"
                  name="option"
                  value="optionTwo"
                  onChange={this.handleChange}
                />
                <label htmlFor="optionTwo">{question.optionTwo.text}</label>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
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

export default connect(mapStateToProps)(QuestionVote);
