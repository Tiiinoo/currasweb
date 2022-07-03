import React, { useState } from 'react'
import './shop.css'

export const Shop = () => {
	
	const [colas, setColas] = useState(0)
	
	return (
		<div className="mainThingContentainer">
				<p>¿Cuántas colas querés que ardan?</p>
				<p>{colas}</p>
				<button onClick = {() => (setColas(colas +1))}>Quiero más colas ardidas</button>
				<div>
				<button onClick = {() => (setColas(colas -1))}>Basta de colas ardidas</button>
				</div>
			</div>	
	)
}
