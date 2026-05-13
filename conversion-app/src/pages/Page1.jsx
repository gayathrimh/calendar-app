import { useState } from 'react';
import { conversions } from '../data';

export default function Page1() {

  const [value, setValue] = useState("");
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState("");

  const handleSubmit = () => {

    const answer =
      Number(value) *
      conversions[current].factor;

    setResult(answer);
  };

  return (
    <div>

      <p>Units Conversion</p>

      <select
        onChange={(e) => setCurrent(e.target.value)}
      >

        {conversions.map((c, index) => (
          <option key={index} value={index}>
            {c.question}
          </option>
        ))}

      </select>

      <br /><br />

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>

      <h2>Result: {result}</h2>

    </div>
  );
}