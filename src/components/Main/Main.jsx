import React from 'react'
import './Main.css'
import mainPic from '../../assets/A.png'
import vector from '../../assets/vectors/Vector.svg'
import vector1 from '../../assets/vectors/Vector-1.svg'
import vector5 from '../../assets/vectors/Vector-5.svg'
import vector6 from '../../assets/vectors/Vector-6.svg'
import vector7 from '../../assets/vectors/Vector-7.svg'

const Main = () => {
	return (
		<div id="main" className="main-section">
			<main className="main">
				<div className="main-content">
					<h1 className="main-title">
						Arthro<span className="main-title-part">hard</span>
					</h1>
					<h3 className="main-subtitle">
						Lab-V Arthrohard Preparat na wsparcie stawów dla psa i kota
					</h3>
					<p className="main-text">
						Arthrohard to dobrze przyswajalny suplement diety w formie syropu, stworzony z
						myślą o zdrowiu stawów Twojego psa lub kota.
					</p>
					<button className="main-button">Kup teraz</button>
				</div>
				<div className="main-image-container">
					<img className="vector" src={vector} alt="" />
					<img className="main-image" src={mainPic} alt="preparat arthrohard" />
					<img className="vector1" src={vector1} alt="" />
				</div>
			</main>
			<img className="main-vector5" src={vector5} alt="" />
			<img className="main-vector6" src={vector6} alt="" />
			<img className="main-vector7" src={vector7} alt="" />
		</div>
	)
}

export default Main
