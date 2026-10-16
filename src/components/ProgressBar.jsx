function ProgressBar({ currentQuestion, totalQuestions }) {
  const progress = ((currentQuestion - 1) / totalQuestions) * 100;

  return (
    <div className="progress-container">
      <div className="progress-label">
        <span>Quiz Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={currentQuestion - 1}
        aria-valuemin={0}
        aria-valuemax={totalQuestions}
        aria-label="Quiz progress"
      >
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;