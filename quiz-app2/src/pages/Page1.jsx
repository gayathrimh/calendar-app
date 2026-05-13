
import {questions} from "../data";
export default function Page1(){
    return(
        <div>
            
            <p>{questions[0].question}</p>

            <input type="number" />
            <button>Submit</button>
        </div>
    );
}