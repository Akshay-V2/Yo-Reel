import {useState} from 'react'
import Ticker from './components/Ticker.jsx';
import './App.css'

function App() {
  const [digits, setDigits] = useState(0);

  function generateRandomDigits() {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setDigits(randomNum);
  }

  return (
    <>
    <div className='top-bar'>
      <div className='top-button'>About</div>
      <div className='top-button'>aksh</div>
    </div>
    {/* add a glitch effect to the text and a magnetic hover to the buttons */}

    <div className='title' onClick={generateRandomDigits}>
      <h2>Your own</h2>
      <h1>REEL</h1>
    </div>

    <Ticker digits={digits} />
    {/* add motion blur */}
    </>
  )
}

export default App
