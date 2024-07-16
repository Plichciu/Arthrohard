import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Main from './components/Main/Main'
import Advantages from './components/Advantages/Advantages'
import Ingredients from './components/Ingredients/Ingredients'
import DogImageSection from './components/DogImageSection/DogImageSection'
import Products from './components/Products/Products'

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Main />
			<Advantages />
			<Ingredients />
			<DogImageSection />
			<Products />
		</div>
	)
}

export default App
