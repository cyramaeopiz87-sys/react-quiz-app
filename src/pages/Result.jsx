import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const score = location.state?.score ?? 0;
  const totalQuestions = location.state?.total ?? 10;

  function handleRetake() {
    navigate("/quiz");
  }

  function handleHome() {
    navigate("/");
  }

  return (
    <main className="result-page">
      <div className="result-container">
        <ResultCard
          score={score}
          totalQuestions={totalQuestions}
          onRetake={handleRetake}
          onHome={handleHome}
        />
      </div>
    </main>
  );
}

export default Result;