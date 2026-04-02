import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const StatisticLine = ({ text, data }) => {
  console.log(data);

  return (
    <tr>
      <td>{text}</td>
      <td>
        {data} {text === "positive" ? "%" : ""}
      </td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const average = (good + neutral + bad) / 3;
  const all = good + neutral + bad;
  let positive;
  if (all === 0) {
    positive = 0;
  } else {
    positive = (good / all) * 100;
  }
  if (all === 0) return <p>No feedback given</p>;
  return (
    <table>
      <tbody>
        <StatisticLine text="good" data={good} />
        <StatisticLine text="neutral" data={neutral} />
        <StatisticLine text="bad" data={bad} />
        <StatisticLine text="all" data={all} />
        <StatisticLine text="average" data={average} />
        <StatisticLine text="positive" data={positive} />
      </tbody>
    </table>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => {
    setGood(good + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
