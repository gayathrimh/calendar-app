import { useState } from 'react';

export default function Page1() {

    const [kmToMiles, setKmToMiles] = useState("");
    const [milesToKm, setMilesToKm] = useState("");
    const [value, setValue] = useState("");
    
            const handleSubmit = () => {

        setKmToMiles(
            Number(value) * 0.621371
        );

        setMilesToKm(
            Number(value) * 1.60934
        );
        };

    return(
        <div>
            <p>Quiz</p>
            
            <input type="number"  value={value}
            onChange={(e) => setValue(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            <p>
            Km to miles: {kmToMiles}
            </p>

            <p>
            Miles to km: {milesToKm}
            </p>
            
        </div>
    );
}