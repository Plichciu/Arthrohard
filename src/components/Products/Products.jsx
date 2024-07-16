import React, { useEffect, useState, useRef } from 'react'
import './Products.css'
import PopupProduct from '../PopupProduct/PopupProduct'

const Products = () => {
	const [pageSize, setPageSize] = useState(10)
	const [products, setProducts] = useState([])
	const [productInfo, setProductInfo] = useState({})
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef(null)
	const [openPopup, setOpenPopup] = useState(false)

	const url = `https://brandstestowy.smallhost.pl/api/random?pageNumber=1&pageSize=${pageSize}`

	const getApi = () => {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				setProducts(data.data)
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true)
						observer.disconnect()
					}
				})
			},
			{
				root: null,
				rootMargin: '100px',
				threshold: 0.1,
			}
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	useEffect(() => {
		if (isVisible) {
			getApi()
		}
	}, [isVisible, pageSize])

	const showPopup = e => {
		let id = e.target.id
		if (id === '') {
			id = e.target.parentElement.id
		}
		const product = products.find(product => product.id === parseInt(id))
		setProductInfo(product)
		setOpenPopup(true)
	}

	return (
		<section id="products" ref={sectionRef} className="products-section">
			<div className="products">
				<div className="products-select">
					<div className="products-select-box">
						<label htmlFor="products">liczba produktów na stronie</label>
						<select
							name="products"
							id="products"
							onChange={e => setPageSize(parseInt(e.target.value))}>
							<option value="10">10</option>
							<option value="20">20</option>
							<option value="30">30</option>
							<option value="40">40</option>
						</select>
					</div>
				</div>
				<div className="products-outer-area">
					<div className="products-area">
						{products.map(product => {
							return (
								<div
									id={product.id}
									onClick={showPopup}
									key={product.id}
									className="products-box">
									<p>ID: {product.id}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>

			{openPopup && (
				<div className="popup-container">
					<PopupProduct productInfo={productInfo} setOpenPopup={setOpenPopup} />
				</div>
			)}
		</section>
	)
}

export default Products
