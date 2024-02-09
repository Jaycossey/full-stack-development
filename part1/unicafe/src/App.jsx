import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Statistics from './components/Statistics';

// calculate percentage function
function percentage(partialValue, totalValue) {
  if (partialValue === totalValue) {
    return 100;
  }

  return (partialValue / totalValue) * 100;
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // store and set average and positive percentage
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [posPerc, setPosPerc] = useState(0);

  const statistics = {good, neutral, bad, all, average, posPerc};

  useEffect(() => {
    // update total count    
    setAll(good + neutral + bad);
    
    // set positive, not sure why the maths isnt working properly, need to come back to it 
    // state is the aim of this exercise and thats whats working
    let percDisp = percentage(good, all);
    setPosPerc(percDisp);
    
    // set average score
    let goodCount = good;
    let badCount = -bad;
    let average = goodCount + badCount / 3;
    setAverage(average);
    console.log(`g: ${good} n: ${neutral} b: ${bad}, all: ${all} av: ${average} per: ${posPerc}`);

  }, [good, neutral, bad]);

  const handleClick = () => {
    const text = event.target.innerText;
    switch(text) {
      case "Good":
        setGood(good + 1);
        break;
      case "Neutral":
        setNeutral(neutral + 1);
        break;
      case "Bad":
        setBad(bad + 1);
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

      <Statistics stats={statistics} />
    </>
  )
}

export default App