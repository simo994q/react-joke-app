import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [joke, setJoke] = useState()
  const [newJokeState, setNewJokeState] = useState(false)

  useEffect(() => {
    const url = 'https://official-joke-api.appspot.com/random_joke'
    fetch(url).then(res => res.json()).then(data => setJoke(data))
  }, [newJokeState])

  return (
    <>
      {joke &&
        <>
          <h2>{joke.setup}</h2>
          <h3>{joke.punchline}</h3>
        </>
      }
      <button onClick={() => { newJokeState ? setNewJokeState(false) : setNewJokeState(true) }}>New joke</button>
    </>
  )
}

export default App
