import { useState } from 'react'
import Button from './Button'
import './App.css'

/**
 * 
 * IMPORTANT!!! When revisiting this tonight, this current build works in terms of method, I just need to handle how 
 * to set the state correctly per array index, I have the state updating, potential fix:
 * 
 * points is initially set to 0, setPoints should take the indexed value and add 1 to it, 
 * this is coming up currently as undefined, re-check the indexing and targeting of the array.
 * Looks like the targeting is working correctly, but the value ends as undefined. so this needs to be tweaked in terms of VALUE
 * not in terms of targetting. 
 * 
 */

const App = () => {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(0);

  // array of anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  // array to store objects
  const aneArray = []
  // populate array of objects.
  for (let i = 0; i < anecdotes.length; i++) {
    aneArray.push(0);
  }

  const arrCopy = [ ...aneArray ];
  // generate random anecdote
  const handleClick = () => {
    let random = Math.floor(Math.random() * (anecdotes.length - 0) + 0);
    setSelected(random);
  }

  // handle vote click on buttons
  const handleVote = () => {
    // THIS IS WHERE THE BUG IS!!! I NEED TO WORK OUT HOW TO SET POINTS FROM HERE INSTEAD OF IT RETURNING UNDEFINED
    console.log(anecdotes[selected]);
    arrCopy[selected] = setPoints(arrCopy[selected] + 1);
    console.log(arrCopy[selected]);
    console.log(arrCopy);
  }


  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <Button onClick={handleClick} text={"Click for  random"} />
      <br />
      <Button onClick={handleVote} text={"Vote for this"} />
    </div>
  )
}

export default App