import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // store and set average and positive percentage
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [posPerc, setPosPerc] = useState(0);

  useEffect(() => {
    
    setAll(good + neutral + bad);
    // setAverage();
    // average should work out with the VALUES of each score. so good should equate to +1, neutral to 0 and bad to -1. 
    // whatever that is I need to find out how to work it out. come back to it

    setPosPerc(good / all * 100);

  }, [good, neutral, bad]);

  const handleClick = () => {
    const text = event.target.innerText;
    switch(text) {
      case "Good":
        setGood(good + 1);
        console.log(good);
        break;
      case "Neutral":
        setNeutral(neutral + 1);
        console.log(neutral);4
        break;
      case "Bad":
        setBad(bad + 1);
        console.log(bad);
        break;
      default:
        console.log("Error, value not defined");
        return;
    }
  }

  return (
    <>
      <Header />

      <Button text={"Good"} onClick={handleClick} />
      <Button text={"Neutral"} onClick={handleClick} />
      <Button text={"Bad"} onClick={handleClick} />

      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {average}</p>
      <p>Positive: {posPerc}%</p>
    </>
  )
}

export default App