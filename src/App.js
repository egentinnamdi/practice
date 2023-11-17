import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(`Today is ${new Date()}`);

  const add = function () {
    setCount((prevCount) => prevCount + step);
  };
  const minus = function () {
    setCount((prevCount) => prevCount - step);
  };

  return (
    <>
      <div>
        <Button
          onClick={() => {
            step > 1 && setStep((prevStep) => prevStep - 1);
          }}
          button="&minus;"
        />
        <span>Step: {step}</span>
        <Button
          onClick={() => {
            setStep((prevStep) => prevStep + 1);
          }}
          button="+"
        />
      </div>
      <div>
        <Button onClick={minus} button="&minus;" />
        <span>Count: {count}</span>
        <Button onClick={add} button="+" />
      </div>
      <p>{date}</p>
    </>
  );
}
function Button({ button, onClick }) {
  return <button onClick={onClick}>{button}</button>;
}
