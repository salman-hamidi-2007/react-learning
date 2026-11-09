import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const skill = "django"
  const name = "salman"
  const resume = 4

  return (
    <div>
      <h1>hello my name is salman</h1>
      <p>i was a backend programer for {resume} years and intrested to learn frontend too!</p>
      <span>this is my practice profestionaly</span>
      <ul><b>django</b></ul>
      
      <br /><br />
      <button onClick={() => setCount(count + 1)}>increase</button>
      <h2>this is my {count} vite app </h2>
      <p>my name is {name} and i'm learning react</p>
    </div>
  )
}

export default App
