import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const ShowAnecdoteOfTheDay = ({ anecdotes, votes, selected }) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  )
}

const ShowAnecdoteWithMostVotes = ({ anecdotes, votes, mostVoted }) => {
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]
  const initialVotes = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(initialVotes)
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleRandomAnecdote = () => {
    const randomIndex = getRandomInt(0, anecdotes.length - 1)
    setSelected(randomIndex)
  }

  const handleVoteAnecdote = () => {
    const arrayClone = [...votes]
    arrayClone[selected] += 1
    setVotes(arrayClone)
    setMostVoted(arrayClone.indexOf(Math.max(...arrayClone)))
  }

  return (
    <div>
      <ShowAnecdoteOfTheDay anecdotes={anecdotes} votes={votes} selected={selected} />
      <Button onClick={handleVoteAnecdote} text="vote" />
      <Button onClick={handleRandomAnecdote} text="next anecdote" />
      <ShowAnecdoteWithMostVotes anecdotes={anecdotes} votes={votes} mostVoted={mostVoted} />
    </div>
  )
}

export default App