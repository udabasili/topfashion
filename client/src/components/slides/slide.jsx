import React, { Component } from 'react';
import SlideCards from './slide-cards/slide-cards.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }


		// Slide button for the left and right
	onClickRightButtonHandler =() => {
		if (this.state.currentSlide < 2) {
			this.setState((prevState) => ({ currentSlide: prevState.currentSlide + 1 }),
			);
		} else {
		this.setState({ currentSlide: 0 },
			);
		}
	}
	onClickLeftButtonHandler =() => {
		if (this.state.currentSlide === 0) {
		this.setState({ currentSlide: 2 },
			);
		} else {
		this.setState((prevState) => ({ currentSlide: prevState.currentSlide - 1 }));
		}
	}

	render() {
	  let i = this.state.currentSlide;
	  let {slideImages} = this.props;
		return (
        <React.Fragment>
          <div className="slide__container">
            <div onClick={this.onClickLeftButtonHandler} className="navigation-arrow left">
    			<FontAwesomeIcon icon={faArrowLeft}/>
  			</div>
            <ul className="slide__container__list">
              <li className=" slide__container__list__item list__item--001">
                <SlideCards {...slideImages[i]} />
              </li>
            </ul>
            <div onClick={this.onClickRightButtonHandler} className="navigation-arrow right">
        		<FontAwesomeIcon icon={faArrowRight}/>
  			</div>
          </div>
        </React.Fragment>
		  );
		}
}
