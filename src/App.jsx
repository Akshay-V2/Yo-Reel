import {useState} from 'react'
import Ticker from './components/Ticker.jsx';
import './App.css'

import { DiceFiveIcon } from "@phosphor-icons/react";

function App() {
  const [digits, setDigits] = useState(0);

  function generateRandomDigits() {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setDigits(randomNum);

    const diceIcon = document.querySelector('.dice');
    diceIcon.classList.add('spin');
    setTimeout(() => {
      diceIcon.classList.remove('spin');
    }, 500);
  }

  return (
    <>
    <div className='top-bar'>
      <div className='top-button'>About</div>
      <div className='top-button'>aksh</div>
    </div>
    {/* add a glitch effect to the text and a magnetic hover to the buttons */}

    <div className='title'>
      <h2>Your own</h2>
      <h1>REEL</h1>
    </div>
    
    <div className='reroll-button' onClick={generateRandomDigits}>
      <DiceFiveIcon size={32} weight="bold" className='dice' />
      <span>Reroll</span>
    </div>
    {/* add a dice roll animation */}


    <Ticker digits={digits} />
    {/* add motion blur */}

    </>
  )
}

export default App
