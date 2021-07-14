import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
  state = { optionOne: "", optionTwo: "", toHome: false };

  handleChange = (event) => {
    const optionText = event.target.value;
    const optionName = event.target.name;

    this.setState({
      [optionName]: optionText,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state;
    if (optionOne.length === 0 || optionTwo.length === 0) {
      return;
    }
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState({
      optionOne: "",
      optionTwo: "",
      toHome: true,
    });
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome) {
      return <Redirect to="/" />;
    }

    return (
      <div className="page">
        <h1>New Question</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Create new question</h3>
          <p>Complete the question:</p>
          <h4>Would you rather ...</h4>
          <input
            value={optionOne}
            onChange={this.handleChange}
            name="optionOne"
            placeholder="Enter Option One Text Here"
          />
          <p>OR</p>
          <input
            value={optionTwo}
            onChange={this.handleChange}
            name="optionTwo"
            placeholder="Enter Option Two Text Here"
          />

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(NewQuestion);
