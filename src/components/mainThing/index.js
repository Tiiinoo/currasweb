import React, { useState, useEffect, useRef } from 'react'
import './mainThing.css'
import { ClothesData } from '../clothesData'


export const MainThing = () => { 
	const[index, setIndex] = useState(0)
	const delay = 2550;
	const timeoutRef = useRef(null)

	const restTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
	}

	useEffect(() => {
		clearTimeout()
		timeoutRef.current = setTimeout(
			() => 
				setIndex((prevIndex) =>
				 prevIndex === ClothesData.length - 1 ? 0 : prevIndex + 1
				),
				delay,
			) 
				return () => {
					restTimeout()
				}
			
	}, [index])
	
	return (
	<div className="container">
		<div className="sliderContainer">
			<div className="sliderShow" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
			{ClothesData.map( ( data, index ) => (
				<div className="slider" key={index}>
						<img src={data.image} alt={data.alt} key={index} className="images" /> 
					</div>
				))}
			</div>
			<div className="slidesShowDots">
				{ClothesData.map((_, idx) => (
					<div key={idx} 
							className={`slidesDot ${ index === idx ? "active" : ""}` } 
							onClick={() => {setIndex(idx)}} />
				))}
			</div>
		</div>
		</div>
	)
}
