import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='name-logo'>
        <h2>SPLI</h2>
        <h2>TTER</h2>
      </div>
    <section className='splitter'>
      
      <div className="first-half">
        <form action="">
          <div>
            <h4>Bill</h4>
          <input className='bill-input' type="text" placeholder='' />
          </div>
          
          <h4>Select Tip %</h4>
          <div className='btn-calc' >
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input
              type="text"
              placeholder='Custom'
            />
          </div>
          <div>
            <h4>Number of People</h4>
            <input
              className='nop-input'
              type="text"
            />
            </div>
          
        </form>
      </div>
      <div className='div-scnd'>
        <div className='second-half'>
        <div>
          <div>
            <h5>Tip Amount</h5>
        <h6>/ person</h6>
          </div>
         <div>
         <h5>Total</h5>
        <h6>/ person</h6>
          </div>   
        </div>
        <div>
        <h1>$4.27</h1>
          <h1>$4.27</h1>
        </div>
        
      </div>
      <button>RESET</button>
      </div>
      
      </section>
    </>
  )
}

export default App
