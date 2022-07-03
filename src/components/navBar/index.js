import React from 'react'
import './navBar.css'
import Title from '../images/title.jpg'
import { Link } from 'react-router-dom'

export const NavBar = () => {

	return (
		<div className="navBar">
			<div className="title">
				<Link to="/"><img className= "titleImg" src={Title} alt="Fernand Lems - Image - Title" /></Link>
			</div>
			<div className="navListContainer">
				<ul className="navList">
						<li>
							<Link to="/shop">SHOP</Link>
							</li>
						<li>
						<Link to="/accesories">ACCESORIES</Link>
						</li>
						<li>
						<Link to="/hat">HATS</Link>
						</li>
				</ul>
			</div>
		</div>

	)
}