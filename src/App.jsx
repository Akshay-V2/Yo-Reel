import React from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='top-bar'>
      <div className='top-button'>About</div>
      <div className='top-button'>aksh</div>
    </div>
    {/* add a glitch effect to the text and a magnetic hover to the buttons */}

    <div className='title'>
      <h2>Your own</h2>
      <h1>Reel</h1>
    </div>

    <div className='reel-container'>
      <div className='reel'>
        <div className='reel-display'></div>
        <div className='reel-display'></div>
        <div className='reel-display'></div>
        <div className='reel-display'></div>
      </div>
    </div>
    {/* add the realistic shadow for the reel box */}
    </>
  )
}

export default App
