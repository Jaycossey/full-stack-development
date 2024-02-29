import { useState } from 'react'
import Button from './Button'
import './App.css'

  // array of anecdotes 
  const anecdotes = [
    {
      anec: 'If it hurts, do it more often.',
      votes: 0
    },
    {
      anec: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      anec: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      anec: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      anec: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      anec: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      anec: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: 0
    },
    {
      anec: 'The only way to go fast, is to go well.',
      votes: 0
    }
  ];

const App = () => {
  const [selected, setSelected] = useState(0);
  const [currentVotes, setCurrentVotes] = useState(0);
  const [highestVotes, setHighestVotes] = useState(0);

  // handle data to find highest voted
  const findMostVotes = () => {
    let dupeArray = anecdotes.sort((a, b) => {
      if (a.votes > b.votes) {
        return 1;
      }
      if (b.votes > a.votes) {
        return -1;
      }
      return 0;
    });
    console.log(dupeArray);
    setHighestVotes(dupeArray.length - 1);
  }

  
  // generate random anecdote
  const handleClick = () => {
    let random = Math.floor(Math.random() * (anecdotes.length - 0) + 0);
    setSelected(random);
    setCurrentVotes(anecdotes[random].votes);
  }

  // handle votes
  const handleVote = () => {
    anecdotes[selected].votes += 1;
    setCurrentVotes(currentVotes + 1);
    findMostVotes();
  }


  return (
    <div>
      {anecdotes[selected].anec}
      <br />
      {`has ${currentVotes} votes.`}
      <br/>
      <Button onClick={handleClick} text={"Click for  random"} />
      <br />
      <Button onClick={handleVote} text={"Vote for this"} />
      <br />
      {anecdotes[highestVotes].anec}
    </div>
  )
}

export default App