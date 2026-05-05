import { useState } from "react";
import { questions } from "../data";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
     if (answer === "") return;
     
    const updatedAnswers = [...userAnswers];
    updatedAnswers[current] = Number(answer);
    setUserAnswers(updatedAnswers);
    setAnswer("");

    if (current === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrent(current + 1);
    }
  };


  let score = 0;

  if (showResult) {
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        score += 2;
      }
    });
  }

  return (
    <div>
      {!showResult ? (
        <div>
          <h2>
            Q{current + 1}: {questions[current].question}
          </h2>

          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button onClick={handleNext}>
            {current === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div>
          <h1>Quiz Result</h1>
          <h2>You scored {score} marks</h2>

          {questions.map((q, index) => {
            const isCorrect = userAnswers[index] === q.answer;

            return (
              <p
                key={index}
                style={{ color: isCorrect ? "green" : "red" }}
              >
                Q{index + 1} - {isCorrect ? 2 : 0}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}