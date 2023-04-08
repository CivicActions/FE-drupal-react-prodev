import {useState} from "react";
import {useInterval} from "./hooks/setInterval";
import TimeDisplay from "./components/TimeDisplay";
import "./Timer.css"

export default function Timer() {
  const [timeInSeconds, setTimeInSeconds] = useState(0);
  const [previousTimeInSeconds, setPreviousTimeInSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  useInterval(
    () => setTimeInSeconds(timeInSeconds => timeInSeconds + 1),
    isTimerRunning ? 1000 : null
  );

  const handleReset = () => {
    setIsTimerRunning(false);
    setPreviousTimeInSeconds(timeInSeconds);
    setTimeInSeconds(0);

  };
  return (
    <div className="ca-block-timer">
      <div className="current-time">
        <TimeDisplay {...{timeInSeconds}} />
      </div>
      <div className={"timer-controls"}>
        <button onClick={() => setIsTimerRunning(!isTimerRunning)}>
          {isTimerRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className={"previous-time"}>
        Previous: <TimeDisplay timeInSeconds={previousTimeInSeconds} />
      </div>
    </div>
  );
}
