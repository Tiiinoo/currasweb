import React from 'react'
import './navBar.css'
import Title from '../images/title.jpg'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
	
	return (
		<div className="navBar">
			<div className="title">
				<Link to="/"><img className= "titleImg" src={Title} alt="Fernand Lems - Image - Title" /></Link>
			</div>
			<div className="navListContainer">
				<ul className="navList">
						<li>
							<NavLink to={`category/shop`}>SHOP</NavLink>
							</li>
						<li>
						<NavLink to={`category/accesories`}>ACCESORIES</NavLink>
						</li>
						<li>
						<NavLink to={`category/hats`}>HATS</NavLink>
						</li>
				</ul>
			</div>
		</div>

	)
}