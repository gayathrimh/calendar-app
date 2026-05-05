import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

export default function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const qIndex = id ? Number(id) - 1 : 0;
  const question = questions[qIndex];

  const [answer, setAnswer] = useState("");

  const handleNext = () => {
    localStorage.setItem(`q${qIndex + 1}`, answer);

    if (qIndex === questions.length - 1) {
      navigate("/result");
    } else {
      navigate(`/question/${qIndex + 2}`);
    }
  };

  return (
    <div>
      <h2>Q{qIndex + 1}: {question.question}</h2>

      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button onClick={handleNext}>
        {qIndex === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}