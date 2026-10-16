function AnswerOption({
  option,
  selectedAnswer,
  correctAnswer,
  onSelect,
  showAnswer,
}) {
  const isSelected = selectedAnswer === option;
  const isCorrect = option === correctAnswer;

  let className = "answer-option";

  if (showAnswer && isCorrect) {
    className += " correct";
  } else if (showAnswer && isSelected && !isCorrect) {
    className += " incorrect";
  } else if (isSelected) {
    className += " selected";
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => onSelect(option)}
      disabled={showAnswer}
    >
      <span>{option}</span>

      {showAnswer && isCorrect && <span>✓</span>}
      {showAnswer && isSelected && !isCorrect && <span>✗</span>}
    </button>
  );
}

export default AnswerOption;