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
  const [total, setTotal] = useState(0);
  const [promedio, setProm] = useState(0);
  const [positivos, setPositivos] = useState(0);

  //handles
  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
    setProm((updatedGood - bad) / (total + 1));
    setPositivos((updatedGood / (total + 1)) * 100);
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
    setProm((good + (updatedNeutral - 1) - bad) / (total + 1));
    setPositivos((good / (total + 1)) * 100);
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
    setProm((good - updatedBad) / (total + 1));
    setPositivos((good / (total + 1)) * 100);
  };
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
      <Statistics text={"average"} value={promedio} />
      <Statistics text={"positive"} value={positivos} />
    </div>
  );
};

export default App;
