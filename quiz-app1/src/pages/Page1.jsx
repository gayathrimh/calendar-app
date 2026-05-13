import {questions} from '../data';
import {useState} from 'react';
export default function Page1(){

    const [current,setCurrent]=useState(0);
    const [score,setScore]=useState(0);
    const [answer,setAnswer]=useState("");
    //const [userAnswers, setUserAnswers] = useState([]);

    const handleSubmit=()=>{
        if(answer==="")return;

          //const updated = [...userAnswers];
  //updated[current] = Number(answer);
  //setUserAnswers(updated);

        if(Number(answer)===questions[current].answer){
            setScore(score+2);
        }
        setAnswer("");
        setCurrent(current+1);
    };
    

    if(current>=questions.length){
                return(
                    <div>
                        <h2>Quiz finished</h2>
                          <h3>You scored {score} marks</h3>
                          {/* {questions.map((q, i) => {
        const correct = userAnswers[i] === q.answer;

        return (
          <p
            key={i}
            style={{ color: correct ? "green" : "red" }}
          >
            Q{i + 1} - {correct ? 2 : 0}
          </p>
        );
      })}*/}
                    </div>
                );
            }
    return(
        <div>
            <h2>Quiz</h2>
            <p>{questions[current].questions}</p>
            
            <input type="number" placeholder='Type your answer here' value={answer}
            onChange={(e)=>setAnswer(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            
        </div>
        
    );
}