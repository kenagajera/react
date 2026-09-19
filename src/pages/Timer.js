import { useEffect, useRef, useState } from "react";
import "./pages.css";


function Timer(){
    const [time,settime] = useState(0);
    const timeRef = useRef(0);
    useEffect(()=>{
        timeRef.current= setInterval(()=>{
            settime((sec) => sec+1)
        },1000);
        return() => clearInterval(timeRef.current)
    },[]);
    const stopTimer = () => {
        clearInterval(timeRef.current);
    };
     
    const startTimer = () => {
        stopTimer();
        timeRef.current = setInterval(() => {
            settime((sec) => sec + 1);
        },1000);
    };

    const resetTimer = () => {
        settime(0);
        startTimer();
    };

 return(
        <div className="timer">
            <h1 className="time">
                Time : {time}
            </h1>
            <button onClick={() => clearInterval(timeRef.current)}>Stop</button>
           
            <button onClick={startTimer} >Start</button>
           
            <button onClick={resetTimer}>Re-Start</button>
        </div>
    );
}
export default Timer;
