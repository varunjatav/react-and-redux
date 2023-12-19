import { useEffect } from "react";
import { useState } from "react";


const Time = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
      console.log("Cleared the timer Interval");
    }
  },[])
    
  return (
    <div>
        <p className="lead">This is the current Time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Time