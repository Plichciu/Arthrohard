import React from 'react'
import './PopupProduct.css'

const PopupProduct = ({ productInfo, setOpenPopup }) => {
	return (
		<div className="popup">
			<div className="popup-tools">
				<p>{productInfo.id}</p>
				<div>
					<button onClick={() => setOpenPopup(false)} className="popup-close">
						x
					</button>
				</div>
			</div>
			<div className="popup-info">
				<p className="popup-product-info">
					Nazwa: <span>{productInfo.name}</span>
				</p>
				<p className="popup-product-info">
					Wartość: <span>{productInfo.value}</span>
				</p>
			</div>
		</div>
	)
}

export default PopupProduct
