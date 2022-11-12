import React, { useContext, useState } from 'react'
import { Context } from '../App'

const HistoryList = () => {
	const context = useContext(Context)
	let { arr } = context

	let [items, setItems] = useState(arr)

	const removeItem = (idx) => {
		setItems((prev) => prev.filter((item, index) => idx !== index))
	}

	// if (items.length < 0) return <App key='reset' />
	// else
	return (
		<div className='historyList'>
			<header>History</header>
			{items.map((item, index) => (
				<div key={index} className='showInfoItem'>
					<span onClick={() => removeItem(index)}>X</span>
					Amount: ${item.amount}, Percentage: {item.percent}%, Tip: ${item.res}
				</div>
			))}
		</div>
	)
}
export default HistoryList
