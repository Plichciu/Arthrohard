import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [activeSection, setActiveSection] = useState('')

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll('section')
			let currentSection = ''

			sections.forEach(section => {
				const sectionTop = section.getBoundingClientRect().top + window.scrollY
				const sectionBottom = sectionTop + section.offsetHeight

				if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
					currentSection = section.id
				}
			})
			setActiveSection(currentSection)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className="header">
			<nav className="navbar">
				<div className="navbar-container">
					<a href="#main" className="navbar-logo">
						Arthro<span className="navbar-logo-accent">hard</span>
					</a>
					<div className={`navbar-links ${isOpen ? 'open' : ''}`}>
						<a
							onClick={toggleMenu}
							className={activeSection === 'advantages' ? 'active' : ''}
							href="#advantages">
							Co nas wyrożnia?
						</a>
						<a
							onClick={toggleMenu}
							className={activeSection === 'ingredients' ? 'active' : ''}
							href="#ingredients">
							skład
						</a>
						<a
							onClick={toggleMenu}
							className={activeSection === 'products' ? 'active' : ''}
							href="#products">
							produkty
						</a>
					</div>
					<div className="burger" onClick={toggleMenu}>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
