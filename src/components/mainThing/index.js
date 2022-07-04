import React, { useState }from 'react';
import './mainThing.css'
import {ClothesData} from '../clothesData';

export const MainThing = ({ slides }) => {
	const [actualSlide, setActualSlide] = useState(0);
	const length = slides.length;

const nextSlide = () => {
	setActualSlide( actualSlide === length - 1 ? 0 : actualSlide + 1 )
};

const prevSlide = () => {
	setActualSlide( actualSlide === 0 ? length - 1 : actualSlide - 1 )
};


if(!Array.isArray(slides) || slides.length <= 0) {
	return null
}

	return (
		<>
			<section className="latestOnes">
				<div className="carrousel">
				<button className="carrouselButtonNext" onClick={nextSlide}>&#8680;</button>
				<button className="carrouselButtonPrev" onClick={prevSlide}>&#8678;</button>
					{ClothesData.map((slide, index) => {
							return ( 
							<div className={ index === actualSlide ? 'slide active' : 'slide'} key={index}>
								{ index === actualSlide && (<img src={slide.image} alt={slide.alt} className="image" />)}
							</div>	
							)
						})
					}
				</div>	
			</section>	
		</>
	
	)
};