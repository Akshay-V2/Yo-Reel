import {useState, useEffect} from 'react'
import Ticker from './components/Ticker.jsx';
import Silk from './components/Silk.jsx';
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

  function handleMouseMove(e) {
    const buttons = document.querySelectorAll('.top-button');
    buttons.forEach(button => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const isHovering = 
        x > 0 && 
        x < rect.width && 
        y > 0 && 
        y < rect.height;

      if (isHovering) {
        const strength = 3;
        const deltaX = (x - rect.width / 2) / strength;
        const deltaY = (y - rect.height / 2) / strength;
        button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      } else {
        button.style.transform = `translate(0px, 0px)`;
      }
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
    <div className='bg-wrapper'>
      <div className='fade'></div>
      <Silk
        speed={5}
        scale={1}
        color="#ff8135"
        noiseIntensity={5.3}
        rotation={0}/>
    </div>

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

// make a new rolling system in which the digits all roll to the lowest number and the time taken to role is programatically set based on the distance to the lowest number. (linear timing function)
// then the numbers will switch to the highest number and then go to the target number. (cubic-out timing function)
// add a sound effect when rolled.
