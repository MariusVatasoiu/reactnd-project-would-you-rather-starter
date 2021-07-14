import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return _saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion(authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() =>
      dispatch(answerQuestion(authedUser, qid, answer))
    );
  };
}
