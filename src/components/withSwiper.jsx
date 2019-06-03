import React, {Component} from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

const withSwiper = (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props);
		}

		componentDidMount() {
			this.swiper = new Swiper('.swiper-container', {
				slidesPerView: 'auto',
				spaceBetween: 30,
				centeredSlides: true,
				watchSlidesProgress: true,
				watchSlidesVisibility: true,
				on: {
					progress: function() {
						for (let i = 0; i < this.slides.length; i++) {
							let currentSlide = this.slides[i];
							let currentPosition = Math.abs(currentSlide.progress);
							if (currentPosition < 1) {
								currentSlide.style.top = `${50 - 50 * currentPosition}px`;
							} else {
								currentSlide.style.top = '0';
							}
						}
					},
					touchStart: function() {
						for (let i = 0; i < this.slides.length; i++) {
							let currentSlide = this.slides[i];
							currentSlide.style.transition = '';
						}
					},
					touchEnd: function() {
						for (let i = 0; i < this.slides.length; i++) {
							let currentSlide = this.slides[i];
							currentSlide.style.transition = 'top 0.5s ease-in-out';
						}
					}

				}
			});
		}

		render() {
			return (
				<div className="swiper-container" style={{height: '400px', width: '800px'}}>
					<div className="swiper-wrapper">
						<WrappedComponent {...this.props} swiper={this.swiper}/>
					</div>
				</div>
			);
		}
	}
}

export default withSwiper;