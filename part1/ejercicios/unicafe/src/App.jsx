/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);
const StatisticLine = (props) => (
  <table>
    <tbody>
      <tr>
        <th>{props.text}</th>
        <td>{props.value}</td>
      </tr>
    </tbody>
  </table>
);
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const prom = ((good + neutral - neutral - bad) / total).toFixed(2);
  const positive = ((good / total) * 100).toFixed(2);

  if (total === 0) {
    return <p>no feedback given</p>;
  }
  return (
    <div>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={total} />
      <StatisticLine text={"average"} value={prom} />
      <StatisticLine text={"positive"} value={positive} />
    </div>
  );
};
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
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  const handleZero = () => {
    setBad(0);
    setGood(0);
    setNeutral(0);
  };

  return (
    <div>
      <h1>feedback</h1>

      <Button handleClick={handleGood} text="good " />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />

      <Button handleClick={handleZero} text="zero" />
    </div>
  );
};

export default App;
