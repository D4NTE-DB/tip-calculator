import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [value, setValue] = useState(0);
  const [custom, setCustom] = useState(``);
  const [btn, setBtn] = useState(``);
  const [persons, setPersons] = useState(1);

  // const { query } = Object.fromEntries(
  //   new window.FormData(event.target)
  //   )

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)

  } 

  const resetSubmit = () => {
    setBtn(0)
    setPersons(1)
    setValue(0)
  }


  const handleChange = (event) => {
    // event.preventDefault()
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(333)
    setValue(event.target.value)

  }

  useEffect(() => {

  }, [persons])

  return (
    <>
      <div className='name-logo'>
        <h2>SPLI</h2>
        <h2>TTER</h2>
      </div>
      <section className='splitter'>

        <div className="first-half">
          <form onSubmit={handleSubmit} action="">
            <div>
              <h4>Bill</h4>
              <input onChange={handleChange} name='bill' className='bill-input' value={value} type="text" placeholder='' />
            </div>

            <h4>Select Tip %</h4>
            <div className='btn-calc' >
              <button onClick={() => setBtn(0.05)} >5%</button>
              <button onClick={() => setBtn(0.1)} >10%</button>
              <button onClick={() => setBtn(0.15)} >15%</button>
              <button onClick={() => setBtn(0.25)} >25%</button>
              <button onClick={() => setBtn(0.5)} >50%</button>
              <input
              onChange={(e) => setBtn(e.target.value)}
                value={btn}
                name='custom'
                type="text"
                placeholder='Custom'
              />
            </div>
            <div>
              <h4>Number of People</h4>
              <input
                onChange={(e) => setPersons((e.target.value))}
                value={persons}
                name='number-people'
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
              <h1>{(value * (btn/100)).toFixed(0)}</h1>
              <h1>{((value * (btn/100))  / persons).toFixed(0)}</h1>
            </div>

          </div>
          <button onClick={resetSubmit}>RESET</button>
        </div>

      </section>
    </>
  )
}

export default App
