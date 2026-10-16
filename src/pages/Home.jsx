import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <section className="home-card">
        <div className="home-icon">🧠</div>

        <p className="eyebrow">CHALLENGE YOURSELF</p>
        <h1>QuizMaster</h1>

        <p className="home-description">
          Test your knowledge with our interactive quiz.
          Answer 10 questions and see how well you score!
        </p>

        <div className="home-info">
          <span>📝 10 Questions</span>
          <span>⏱️ Take your time</span>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate('/quiz')}
        >
          Start Quiz →
        </button>

        <p className="home-footer">
          Ready to test your knowledge?
        </p>
      </section>
    </main>
  );
}

export default Home;