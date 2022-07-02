import React from 'react'
import './navBar.css'
import Title from '../images/title.jpg'

export const NavBar = () => {

	return (
			<div className="navBar">
				<div>
					<img src={Title} alt="Fernand Lems - Image - Title" />
				</div>
				<div className="navList">
					<p>SHOP - Accesories - HATS</p>
				</div>
		</div>

	)
}