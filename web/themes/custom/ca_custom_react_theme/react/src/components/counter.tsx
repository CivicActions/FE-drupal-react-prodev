import {useState} from "react";
export default function Counter ({incrementBy = 1}) {
  const [count, setCount] = useState(0);
  return (<div>
    <div className="count">
      Count: {count}
    </div>
    <button onClick={() => setCount(count => count + incrementBy)}>Increment +{incrementBy}</button>
    <button onClick={() => setCount(count => count - incrementBy)}>Decrement -{incrementBy}</button>
    <button onClick={() => setCount(0)}>Reset</button>
  </div>)
}
