import { useState, useRef } from 'react'
import './app.scss'

function App() {
  const [amount, setAmount] = useState(0)
  const [percent, setPercent] = useState(0)
  const [tip, setTip] = useState(0)
  const [items, setItems] = useState([])

  let amountRef = useRef(amount)
  let percentRef = useRef(percent)
  let tipRef = useRef(tip)

  const amountHandle = (e) => {
    if (isNaN(e.target.value)) {
      alert('Please input a valid amount')
      return
    }
    setAmount(+e.target.value)
    amountRef.current = +e.target.value
  }

  const percentHandle = (e) => {
    if (isNaN(e.target.value)) {
      alert('Please input a valid percentage')
      return
    }
    setPercent(+e.target.value)
    percentRef.current = +e.target.value
  }

  const calc = () => {
    let res = amount * percent / 100
    setTip(res)
    tipRef.current = res
    setItems([
      ...items,
      {
        amount: amountRef.current,
        percent: percentRef.current,
        tip: tipRef.current
      }
    ])
    setAmount(0)
    setPercent(0)
  }

  const deleteItem = (index) => {
    setItems(prev => {
      return prev.filter((_, idx) => idx !== index)
    })
  }

  return (
    < div className="App" >
      <div className='appHeader'>
        <header className='tipHeader'>Tip Calculator</header>
        <main>
          <div className='amountDiv'>
            Amount($) <input type='text' value={amount} onChange={amountHandle} />
          </div>
          <div className='percentDiv'>
            Percentage(%) <input type='text' value={percent} onChange={percentHandle} />
          </div>
          <button className='handleBtn' onClick={calc}>
            Calculate
          </button>
          <div className="showInfoItem">
            Amount: ${amount}, Percentage: {percent}%, Tip: ${tip}
          </div>
          <header>History</header>
          <div className='historyList'>
            {
              items.map((item, index) => (
                <div className="historyItem" key={index}>
                  Amount: ${item.amount}, Percentage: {item.percent}%, Tip: ${item.tip}
                  <span onClick={() => deleteItem(index)}>X</span>
                </div>
              ))
            }
          </div>
        </main>
      </div>
    </div >
  )
}

export default App



