import { connect } from "react-redux";

function LeaderBoard(props) {
  const { top, users } = props;
  return (
    <div className="page">
      {top.map((u) => (<section key={u.id} className="top">
        <div className="top-avatar">
          <img
            className="avatar"
            src={users[u.id].avatarURL}
            alt={users[u.id].name}
          />
        </div>
        <div className="top-main">
          <h3>{users[u.id].name}</h3>

          <p>Answered questions: {u.answered}</p>
          <p>Created questions: {u.created}</p>
        </div>
        <div className="top-score">
          <p>
            <strong>Score: {u.total}</strong>
          </p>
        </div>
      </section>))}
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
