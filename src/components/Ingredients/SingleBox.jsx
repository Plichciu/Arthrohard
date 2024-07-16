import React from 'react'
import './Ingredients.css'

const SingleBox = ({ title, amount, text }) => {
	return (
		<div className="ingredients-box">
			<span className="ingredients-circle"></span>
			<p className="ingredients-box-title">{title}</p>
			<span className="ingredients-underline"></span>
			<p className="ingredients-amount">{amount}</p>
			<p className="ingredients-box-text">{text}</p>
		</div>
	)
}

export default SingleBox
