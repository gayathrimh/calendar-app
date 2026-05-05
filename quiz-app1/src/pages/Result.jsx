import { questions } from "../data/questions";

export default function Result() {
  let score = 0;

  const results = questions.map((q, index) => {
    const userAnswer = Number(localStorage.getItem(`q${index + 1}`));
    const isCorrect = userAnswer === q.answer;

    if (isCorrect) score += 2;

    return { index, isCorrect };
  });

  return (
    <div>
      <h1>Congrats for finishing the test</h1>
      <h2>You have scored {score} marks</h2>

      {results.map((res) => (
        <p
          key={res.index}
          style={{ color: res.isCorrect ? "green" : "red" }}
        >
          Q{res.index + 1} - {res.isCorrect ? 2 : 0}
        </p>
      ))}
    </div>
  );
}