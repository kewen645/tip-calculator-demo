import { useState, createContext } from 'react'
import ShowInfo from './components/ShowInfo'
import HistoryList from './components/HistoryList'
import './app.scss'

export const Context = createContext()
let arr = []

function App() {
  const [amount, setAmount] = useState('')
  const [percent, setPercent] = useState('')
  const [tipVal, setTipVal] = useState('')

  const calc = () => {
    let a = +amount
    let p = +percent
    let res = (a * p) / 100
    setTipVal(res.toString())
    arr.unshift({ a: amount, p: percent, res })
  }

  return (
    <div className="App" >
      <div className='appHeader'>
        <Context.Provider value={{ amount, percent, tipVal, arr }}>
          <header className='tipHeader'>Tip Calculator</header>
          <main>
            <div className='amountDiv'>
              Amount($) <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className='percentDiv'>
              Percentage(%) <input type='text' value={percent} onChange={(e) => setPercent(e.target.value)} />
            </div>
            <button className='handleBtn' onClick={() => calc()}>
              Calculate
            </button>
            <ShowInfo />
            <HistoryList />
          </main>
        </Context.Provider>
      </div>
    </div>
  )
}

export default App



