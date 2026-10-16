import AnswerOption from "./AnswerOption";

function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
  showAnswer,
}) {
  return (
    <section className="question-card">
      <h2>{question.question}</h2>

      <div className="answer-list">
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            selectedAnswer={selectedAnswer}
            correctAnswer={question.answer}
            onSelect={onSelect}
            showAnswer={showAnswer}
          />
        ))}
      </div>
    </section>
  );
}

export default QuestionCard;