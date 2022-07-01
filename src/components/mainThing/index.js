import React, { useState } from 'react';
import {Background} from '../background/index';
import './mainThing.css'

export const MainThing = () => {
	const [colas, setColas] = useState(0)

	return (
		<div className="mainThingContainer">
						<Background />
			<div className="mainThingContent">
				<p>¿Cuántas colas querés que ardan?</p>
				<p>{colas}</p>
				<button onClick = {() => (setColas(colas +1))}>Quiero más colas ardidas</button>
				<div>
				<button onClick = {() => (setColas(colas -1))}>Basta de colas ardidas</button>
				</div>
			</div>	
		</div>
	)
}