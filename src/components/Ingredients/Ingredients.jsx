import React from 'react'
import './Ingredients.css'
import productPic from '../../assets/sad1.png'
import vectorB1 from '../../assets/vectors/VectorB1.svg'
import vectorB2 from '../../assets/vectors/VectorB2.svg'
import SingleBox from './SingleBox'

const Ingredients = () => {
	return (
		<section id="ingredients" className="ingredients-section">
			<div className="ingredients">
				<div className="ingredients-title-area">
					<h3 className="ingredients-title">Skład w 5ml</h3>
				</div>
				<h4 className="ingredients-subtitle">Co dają poszczególne składniki:</h4>
				<div className="ingredients-area">
					<div className="ingredients-boxes">
						<SingleBox
							title="Siarczan glukozaminy"
							amount="650 mg"
							text="Glukozamina jest naturalnym składnikiem chrząstki. Dodatek glukozaminy
								przyczynia się do zwiększenia produkcji glikozaminoglikanów (m.in.
								siarczanu keratanu, heparanu, kwasu hialuronowego), które pomagają w
								odbudowie chrząstki, co jest szczególnie korzystne dla zwierząt ze
								zmianami zwyrodnieniowymi stawów."
						/>
						<SingleBox
							title="Siarczan chondroityny"
							amount="300 mg"
							text="Chondroityna, podobnie jak glukozamina, jest składnikiem chrząstki.
								Chondroityna pomaga zwalczać enzymy, które niszczą chrząstkę, a także
								pomaga chrząstce zatrzymać wodę, co jest ważne dla jej sprężystości i
								absorpcji wstrząsów."
						/>
						<SingleBox
							title="Kwas hialuronowy"
							amount="50 mg"
							text="Kwas hialuronowy jest kluczowym składnikiem płynu stawowego, który działa
								jak smar i amortyzator dla stawów. Suplementacja kwasem hialuronowym może
								pomóc w utrzymaniu prawidłowej objętości i konsystencji płynu stawowego."
						/>
					</div>
					<div className="ingredients-box-pic">
						<img className="ingredients-vector1" src={vectorB1} alt="" />
						<img className="ingredients-vector2" src={vectorB2} alt="" />
						<img className="ingredients-pic" src={productPic} alt="produkt" />
						<button className="ingredients-button">Kup teraz</button>
					</div>
					<div className="ingredients-boxes">
						<SingleBox
							title="Czarci pazur"
							amount="250 mg"
							text="Czarci pazur jest rośliną, która ma właściwości przeciwzapalne i
								przeciwbólowe. Może to pomóc zwierzętom, które doświadczają bólu i stanu
								zapalnego związanego z problemami ze stawami."
						/>
						<SingleBox
							title="Witamina C"
							amount="50 mg"
							text="Witamina C jest potężnym przeciwutleniaczem, który może pomóc w ochronie
								stawów poprzez neutralizację wolnych rodników, które mogą uszkadzać
								chrząstkę. Ponadto, witamina C odgrywa ważną rolę w produkcji kolagenu,
								kluczowego składnika chrząstki."
						/>
						<SingleBox
							title="MSM"
							amount="250 mg"
							text="Metylosulfonylometan, czyli MSM, to naturalny związek siarki, który pomaga
								w utrzymaniu zdrowych stawów poprzez zmniejszenie stanu zapalnego i bólu.
								MSM może również pomagać w produkcji kolagenu, co przyczynia się do
								zdrowia chrząstki stawowej."
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Ingredients
