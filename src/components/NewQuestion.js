function NewQuestion() {
  return (
    <div className="container">
      <h1>New Question</h1>
      <h3>Create new question</h3>
      <p>Complete the question:</p>
      <h4>Would you rather ...</h4>
      <input placeholder="Enter Option One Text Here" />
      <p>OR</p>
      <input placeholder="Enter Option Two Text Here" />

      <div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default NewQuestion;
