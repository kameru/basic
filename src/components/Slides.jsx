import React, {Component} from 'react';
import withSwiper from './withSwiper';

class Slides extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const slides = function(){
			const elements = [];
			for (let i = 0; i < 10; i++) {
				elements.push(
					<div key={i}
						 className="swiper-slide"
						 style={{
							 backgroundColor: '#' + 'DDD' + (999 - ((i + 1) * 30)),
							 height: '300px',
							 width: '600px'
						 }}
					>{`Slide ${i + 1}`}</div>
				)
			}
			return elements;
		};

		return <>{slides()}</>;
	}
}

export default withSwiper(Slides);