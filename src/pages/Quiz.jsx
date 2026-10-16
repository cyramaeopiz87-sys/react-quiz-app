import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../questions";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

const QUESTIONS_PER_QUIZ = 10;

function getRandomQuestions() {
  const shuffled = [...questions];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(QUESTIONS_PER_QUIZ, shuffled.length));
}

function Quiz() {
  const navigate = useNavigate();

  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;

  function handleSelect(option) {
    if (showAnswer) return;
    setSelectedAnswer(option);
  }

  function handleSubmit() {
    if (!selectedAnswer || showAnswer) return;

    if (selectedAnswer === currentQuestion.answer) {
      setScore((previousScore) => previousScore + 1);
    }

    setShowAnswer(true);
  }

  function handleNext() {
    if (currentIndex === totalQuestions - 1) {
      navigate("/result", {
        state: {
          score,
          total: totalQuestions,
        },
      });

      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswer(null);
    setShowAnswer(false);
  }

  if (!currentQuestion) {
    return <main className="home-page">No questions available.</main>;
  }

  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <QuizHeader
          currentQuestion={currentIndex + 1}
          totalQuestions={totalQuestions}
        />

        <ProgressBar
          currentQuestion={currentIndex + 1}
          totalQuestions={totalQuestions}
        />

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelect={handleSelect}
          showAnswer={showAnswer}
        />

        <div className="quiz-actions">
          {!showAnswer ? (
            <button
              className="primary-button"
              onClick={handleSubmit}
              disabled={!selectedAnswer}
            >
              Check Answer
            </button>
          ) : (
            <button className="primary-button" onClick={handleNext}>
              {currentIndex === totalQuestions - 1
                ? "See Results →"
                : "Next Question →"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default Quiz;