import React, { Component } from 'react';
import SlideCards from './slide-cards/slide-cards.component';

/**
 * Class that handles the main slide creation
 */
export default class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount(){
	  this.runSlide = setInterval(()=>{
			this.onSlideMovementHandler()
	  }, 2000)
  }

  componentWillUnmount(){
	  clearInterval(this.runSlide)
  }

  /**
   * This handles the movement of the slide content
   */
	onSlideMovementHandler = () => {
		if (this.state.currentSlide < 2) {
			this.setState((prevState) => ({ currentSlide: prevState.currentSlide + 1 }),
			);
		} else {
		this.setState({ currentSlide: 0 },
			);
		}
	}

	render() {
	  let i = this.state.currentSlide;
	  let {slideImages} = this.props;
		return (
        <React.Fragment>
          <div className="slide__container">
            <ul className="slide__container__list">
              <li className=" slide__container__list__item list__item--001">
                <SlideCards {...slideImages[i]} />
              </li>
            </ul>
          </div>
        </React.Fragment>
		  );
		}
}
