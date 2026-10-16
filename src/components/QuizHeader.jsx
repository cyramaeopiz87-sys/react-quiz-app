function QuizHeader({ currentQuestion, totalQuestions }) {
  return (
    <header className="quiz-header">
      <div>
        <p className="eyebrow">QUIZMASTER</p>
        <h1>Knowledge Challenge</h1>
      </div>

      <div className="question-counter">
        Question {currentQuestion} of {totalQuestions}
      </div>
    </header>
  );
}

export default QuizHeader;