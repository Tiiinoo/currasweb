import React from 'react';
import {Background} from '../background/index';
import './mainThing.css'

export const MainThing = () => {


	return (
			<section aria-label="Most valued">
				<div className="carrousel">
					<button className="carrouselButtonNext">&#8680;</button>
					<button className="carrouselButtonPrev">&#8678;</button>
					<ul>
						<li className="slide" data-active> 
							<img src="https://www.pngplay.com/wp-content/uploads/2/Dress-Shirt-No-Background.png" alt="Red Polo" />
						</li>
						<li className="slide"> 
							<img src="https://www.duracolor.co/components/com_virtuemart/shop_image/product/resized/magictoolbox_cache/dd6b6cfc02e1715d9cb0915c3f4a72c2/813/thumb350x350/fbf14b93f4f018c9a4674221fd3b7b09.png" alt="Black T-shirt" />
						</li>
						<li className="slide"> 
							<img src="https://w7.pngwing.com/pngs/321/746/png-transparent-long-sleeved-t-shirt-dress-shirt-t-shirt-white-textile-apparel.png" alt="Grey shirt" />
						</li>
						<li className="slide"> 
							<img src="https://www.pngplay.com/wp-content/uploads/2/Dress-Shirt-Free-PNG.png" alt="Black shirt" />
						</li>
						<li className="slide"> 
							<img src="https://media.istockphoto.com/vectors/tshirt-white-mockup-vector-realistic-template-isolated-on-transparent-vector-id1352674402?b=1&k=20&m=1352674402&s=612x612&w=0&h=1R_BRjT3mcbkXj7xU665lbc4GhXZqdBf5ftf-zlYHQo=" alt="White Tshirt" />
						</li>
					</ul>
				</div>	
			</section>	
	)
}