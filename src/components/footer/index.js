import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
	
	return (
		<div className="footer">
			<div className="footerListContainer">
				<ul className="footerList">
					<li>
						<Link to="/">&copy</Link>
					</li>
					<li>
						<Link to={`/about`}>About</Link>
						</li>
					<li>
						<Link to={`/contact`}>Contact</Link>
					</li>
					<li>
						<Link to={`/policies`}>Policies</Link>
					</li>
				</ul>
			</div>
		</div>
	)
	}
