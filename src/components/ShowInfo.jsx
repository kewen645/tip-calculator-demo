import React, { useContext } from 'react'
import { Context } from '../App'
import './showinfo.scss'

const style = {
	color: 'rgb(8, 66, 152)',
	backgroundColor: 'rgb(207, 226, 255)',
}

const ShowInfo = () => {
	const context = useContext(Context)

	const { amount, percent, tipVal } = context

	return (
		<>
			{!isNaN(parseInt(amount)) && !isNaN(parseInt(percent)) ? (
				<div className='showInfoItem' style={style}>
					Amount: ${amount}, Percentage: {percent}%, Tip: ${tipVal}
				</div>
			) : (
				''
			)}
		</>
	)
}

export default ShowInfo
