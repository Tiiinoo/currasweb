import React, { useState } from 'react'
import './shop.css'

export const Shop = () => {
	
	const [colas, setColas] = useState(0)
	
	function incrementColas()  {
		setColas(prevColas => prevColas + 1)
	}

	function decreseColas()  {
		setColas(prevColas => prevColas - 1)
	}

	return (
		<div className="mainThingContentainer">
				<p>¿Cuántas colas querés que ardan?</p>
				<p>{colas}</p>
				<button onClick = {incrementColas}>Quiero más colas ardidas</button>
				<div>
				<button onClick = {decreseColas}>Basta de colas ardidas</button>
				</div>
			</div>	
	)
}
