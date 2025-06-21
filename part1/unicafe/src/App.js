import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  
  return (
    <>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>
    </>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0 + '%')

  const handleGood = () => {
    const newGood = good + 1
    const newTotal = all + 1
    setGood(newGood)
    setAll(newTotal)
    setAverage(((newGood * 1) + (bad * -1)) / newTotal)
    setPositive((newGood / newTotal * 100) + '%')
  }
  const handleNeutral = () => {
    const newNeutral = neutral + 1
    const newTotal = all + 1
    setNeutral(newNeutral)
    setAll(newTotal)
    setAverage(((good * 1) + (bad * -1)) / newTotal)
    setPositive((good / newTotal * 100) + '%')
  }
  const handleBad = () => {
    const newBad = bad + 1
    const newTotal = all + 1
    setBad(newBad)
    setAll(newTotal)
    setAverage(((good * 1) + (newBad * -1)) / newTotal)
    setPositive((good / newTotal * 100) + '%')
  }

  return (
    <div>
      <Title text="Give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Title text="Statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App