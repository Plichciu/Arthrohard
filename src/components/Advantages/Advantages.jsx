import React from 'react'
import './Advantages.css'
import flowerPic from '../../assets/flower.jpg'
import syringePic from '../../assets/syringe.jpg'
import imgDog1 from '../../assets/imgDog1.jpg'
import imgDog2 from '../../assets/imgDog2.jpg'
import vectorA1 from '../../assets/vectorsA/VectorA1.svg'
import vectorA2 from '../../assets/vectorsA/VectorA2.svg'
import vectorA3 from '../../assets/vectorsA/VectorA3.svg'
import vectorA4 from '../../assets/vectorsA/VectorA4.svg'
import vectorA5 from '../../assets/vectorsA/VectorA5.svg'
import vectorA6 from '../../assets/vectorsA/VectorA6.svg'

const Advantages = () => {
	return (
		<section id="advantages" className="advantages-section">
			<div className="advantages">
				<h3 className="advantages-title">Co wyróżnia nasz preparat</h3>
				<div className="advantages-boxes">
					<div className="advantages-box">
						<div className="advantages-box-title">
							<h4>Innowacyjny dodatek - Czarciego Pazura</h4>
						</div>
						<p className="advantages-text">
							Zapewnia dodatkowe wsparcie w zwalczaniu stanów bólowych i zapalnych.
							Skoncentrowane składniki aktywne, opracowane we współpracy z lekarzami
							weterynarii, przynoszą szybkie i zauważalne efekty, szczególnie korzystne
							dla zwierząt z poważnymi problemami stawowymi.
						</p>
						<div className="advantages-pic-box">
							<img className="advantages-vector vectorA1" src={vectorA1} alt="" />
							<img className="advantages-vector vectorA2" src={vectorA2} alt="" />
							<img className="advantages-pic" src={flowerPic} alt="Fioletowy kwiat" />
						</div>
					</div>
					<div className="advantages-box">
						<div className="advantages-box-title">
							<h4>Wygoda - dwa sposoby podawania</h4>
						</div>
						<div className="advantages-numbers">
							<div className="advantages-box-number">
								<span className="advantages-number">1</span>
								<p>Bezpośrednio do pyszczka</p>
							</div>
							<div className="advantages-box-number">
								<span className="advantages-number">2</span>
								<p>Zmieszany z karmą</p>
							</div>
						</div>
						<div className="advantages-pics-box">
							<img className="advantages-vector vectorA3" src={vectorA3} alt="" />
							<img className="advantages-vector vectorA4" src={vectorA4} alt="" />
							<img
								className="advantages-pic advantages-pic-dog"
								src={imgDog1}
								alt="Pies"
							/>
							<img
								className="advantages-pic advantages-pic-dog"
								src={imgDog2}
								alt="Pies"
							/>
						</div>
					</div>
					<div className="advantages-box">
						<div className="advantages-box-title">
							<h4>Skuteczność - skoncentrowana dawka</h4>
						</div>
						<p className="advantages-text">
							<b>Tylko jedna porcja dziennie. </b>To nie tylko wygoda, ale również
							gwarancja, że Twoje zwierzę otrzymuje wszystko, czego potrzebuje, aby
							cieszyć się zdrowiem i aktywnością na długo. Skorzystaj z zalet Arthrohard i
							zobacz różnicę w komforcie życia swojego zwierzęcia.
						</p>
						<div className="advantages-pic-box">
							<img className="advantages-vector vectorA5" src={vectorA5} alt="" />
							<img className="advantages-vector vectorA6" src={vectorA6} alt="" />
							<img
								className="advantages-pic"
								src={syringePic}
								alt="Strzykawka z igłą na niebieskim tle"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages
