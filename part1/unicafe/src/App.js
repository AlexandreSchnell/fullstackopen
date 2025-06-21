import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
          <StatisticsLine text='good' value={props.good} />
          <StatisticsLine text='neutral' value={props.neutral} />
          <StatisticsLine text='bad' value={props.bad} />
          <StatisticsLine text='all' value={props.all} />
          <StatisticsLine text='average' value={props.average} />
          <StatisticsLine text='positive' value={props.positive} />
      </tbody>
    </table>
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