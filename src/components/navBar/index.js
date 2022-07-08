import React, { useState, useEffect } from 'react'
import './navBar.css'
import Title from '../images/title.jpg'
import { Link, NavLink, useParams } from 'react-router-dom'

export const NavBar = () => {
	const {category} = useParams()
	const [cssClass, setCssClass ] = useState(() => {
		if (category != undefined ) {
			console.log(category)
			return 'black'
			
		}  else {
			console.log(category)
			return 'white'
		}
})

	const whiteClass = () => {
		setCssClass('white')
		
	}

	console.log(category)
	const blackClass = () => {
		setCssClass('black')
		console.log(category)	
	}


	return (
		<div className="navBar">
			<div className="title">
				<Link to="/"><img className= "titleImg" src={Title} alt="Fernand Lems - Image - Title"
				onClick={whiteClass}/></Link>
			</div>
			<div className="navListContainer">
				<ul className={cssClass}>
						<li>
							<NavLink to={`category/shop`} onClick={blackClass}>SHOP</NavLink>
							</li>
						<li>
						<NavLink to={`category/accesories`} onClick={blackClass}>ACCESORIES</NavLink>
						</li>
						<li>
						<NavLink to={`category/hats`} onClick={blackClass}>HATS</NavLink>
						</li>
				</ul>
			</div>
		</div>

	)
}