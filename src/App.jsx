import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './queries.css'

function App() {
  const [quote, setQuote] = useState({
    id: null,
    advice: null
  })
  useEffect(() => {
    getAdvice()
  }, [])

  async function getAdvice() {
    await fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setQuote(data.slip));

  }
  setInterval(getAdvice, 10000)
  // setInterval(console.log('Hiiiiiiiii'), 3000);



  return (
    <>
      <h1 className='primary-heading'>Advice API</h1>
      <div className='quote-card'>
        <div className='quote-textbox'>


          <p className='quote-id'>ADVICE #{quote.id}</p>
          <p className='quote-text'>{quote.advice}</p>
          <div className='quote-pause'><ion-icon name="pause-outline"></ion-icon></div>
        </div>
        <div className='quote-dice'>
          <ion-icon name="cube"></ion-icon>
        </div>


      </div>
      {/* {console.log('new quote: ', quote)} */}
    </>
  )
}

export default App
