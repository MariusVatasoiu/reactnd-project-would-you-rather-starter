import { connect } from "react-redux";

function LeaderBoard(props) {
  console.log("TOP", props.top);
  const { top, users } = props;
  return (
    <div className="page">
      <h1>Leader Board</h1>

      {top.map((u) => (<section key={top.id} className="top">
        <h3>{users[u.id].name}</h3>
        <img
          className="avatar"
          src={users[u.id].avatarURL}
          alt={users[u.id].name}
        />
        <p>Answered questions: {u.answered}</p>
        <p>Answered questions: {u.created}</p>
        <p>
          <strong>Score: {u.total}</strong>
        </p>
      </section>))}
      <section className="top">
      </section>
    </div>
  );
}

function mapStateToProps({ users, questions }) {
  // {sarahedo: {answered: 0, created: 0, total: 0}}
  let top = {};
  Object.keys(users).forEach((user) => {
    top[user] = { id: user, answered: 0, created: 0, total: 0 };
  });

  Object.values(questions).forEach((q) => {
    // Count created questions
    top[q.author].created += 1;
    top[q.author].total += 1;
    // Count answered questions
    [...q.optionOne.votes, ...q.optionTwo.votes].forEach((votedBy) => {
      top[votedBy].answered += 1;
      top[votedBy].total += 1;
    });
  });
  return {
    top: Object.values(top).sort((a, b) => {
      return b.total - a.total;
    }),
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
