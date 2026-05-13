import { useState } from 'react';
import {questions} from '../data'
export default function Page1(){
    const [current, setCurrent] = useState(0);
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);

    const handleSubmit=()=>{

         if (Number(answer) === questions[current].answer) {
    setScore(score + 2);
  }

  setAnswer("");
        setCurrent(current+1);
    }

    if(current>=questions.length){
        return<h2>Quiz finished you have scored {score} </h2>
    }
    return(
        <div>
            <p>Quiz</p>
            <p>{questions[current].questions}</p>
            <input type="number" value={answer}
  onChange={(e) => setAnswer(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}