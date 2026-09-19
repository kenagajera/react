import { useEffect, useState } from "react";
import './pages.css';

function Habit() {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [hobbies , sethobbies] = useState('');
    const [habit , sethabit] = useState([]);

    useEffect(() => {
        const save = JSON.parse(localStorage.getItem("habits"));
        if (save) {
            sethabit(save);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("habits", JSON.stringify(habit));
    }, [habit]);
    

    const handleSubmit = () => {
        setSubmittedName(name);  
    };
    const Hsubmit = () => {
        sethabit([...habit, hobbies]); 
        sethobbies(""); 
    };
    

    return (
        <div className="habit">
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit</button>

            {submittedName !== "" && (
                <div className="hobbies">
                   <h2>Welcome, {submittedName}!</h2>
                    <input 
                        type="text" 
                        placeholder="Enter your hobbies" 
                        value={hobbies} 
                        onChange={(h) => sethobbies(h.target.value)} 
                    />
                    <button onClick={Hsubmit}>Submit</button>
                    
                    <ul>
                        {habit.map((h, index) => (
                            <li key={index}>{h}</li>
                        ))}
                    </ul>
                    
                    
                </div>
            )}
        </div>
    );
}

export default Habit;
