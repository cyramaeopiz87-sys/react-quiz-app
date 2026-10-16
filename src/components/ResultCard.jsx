function ResultCard({ score, totalQuestions, onRetake, onHome }) {
  const incorrect = totalQuestions - score;
  const percentage = Math.round((score / totalQuestions) * 100);

  let message = "Keep practicing! You can improve with every attempt.";

  if (percentage === 100) {
    message = "Perfect score! Excellent work!";
  } else if (percentage >= 80) {
    message = "Great job! You know your stuff!";
  } else if (percentage >= 50) {
    message = "Good effort! Keep learning and improving.";
  }

  return (
    <section className="result-card">
      <div className="result-icon">🏆</div>

      <p className="eyebrow">QUIZ COMPLETED</p>
      <h1>Your Results</h1>
      <p>{message}</p>

      <div className="score-display">
        <span>Final Score</span>
        <h2>
          {score} / {totalQuestions}
        </h2>
        <p>{percentage}%</p>
      </div>

      <div className="result-details">
        <div>
          <span>Correct Answers</span>
          <strong>{score}</strong>
        </div>

        <div>
          <span>Incorrect Answers</span>
          <strong>{incorrect}</strong>
        </div>

        <div>
          <span>Total Questions</span>
          <strong>{totalQuestions}</strong>
        </div>
      </div>

      <div className="result-actions">
        <button className="primary-button" onClick={onRetake}>
          Retake Quiz ↻
        </button>

        <button className="secondary-button" onClick={onHome}>
          Return Home
        </button>
      </div>
    </section>
  );
}

export default ResultCard;