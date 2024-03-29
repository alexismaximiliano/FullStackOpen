/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const Statistics = (props) => (
  <p>
    {props.text} {props.value}
  </p>
);
const App = () => {
  // guarda los clics de cada botón en su propio estado
  //variables
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //handles
  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };
  const handleZero = () => {
    setBad(0);
    setGood(0);
    setNeutral(0);
  };
  
  const total = good + neutral + bad;
  const prom = (good + neutral - neutral - bad) / total;
  const positive = (good / total) * 100;
  return (
    <div>
      <h1>feedback</h1>

      <Button handleClick={handleGood} text="good " />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h2>statistics</h2>
      <Statistics text={"good"} value={good} />
      <Statistics text={"neutral"} value={neutral} />
      <Statistics text={"bad"} value={bad} />
      <Statistics text={"all"} value={total} />
      <Statistics text={"average"} value={prom} />
      <Statistics text={"positive"} value={positive} />

      <Button handleClick={handleZero} text="zero" />
    </div>
  );
};

export default App;