import { useState } from 'react'
import Button from './Button'

const App = () => {
  const [points, setPoints] = useState(0);

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
  ]
  // array to store objects
  const aneArray = []
  // populate array of objects.
  for (let i = 0; i < anecdotes.length; i++) {
    aneArray.push({
      anec: anecdotes[i],
      points: 0
    });
  }
  console.log(aneArray);

  // generate random anecdote
  const handleClick = () => {
    let random = Math.floor(Math.random() * (anecdotes.length - 0) + 0);
    setSelected(random);
  }

  // handle vote click on buttons
  const handleVote = () => {
    console.log("Vote");
    aneArray[selected].points = setPoints(aneArray[selected].points + 1);
    console.log(aneArray[selected].points)
  }

  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <Button style={"background: blue;"} onClick={handleClick} text={"Click for  random"} />
      <Button onClick={handleVote} text={"Vote for this"} />
    </div>
  )
}

export default App