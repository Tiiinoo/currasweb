import React from 'react';
import './background.css';
import Collar from '../video/collar.mp4';


export const Background = () => {
	return (
		<>
			<video autoPlay loop muted>
				<source src={Collar} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</>
	);
}
