import React, { Component } from 'react';
import SlideCards from './slide-cards/slide-cards.component';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  componentDidMount(){
	  this.runSlide = setInterval(()=>{
			this.onClickRightButtonHandler()
	  }, 2000)
  }

  componentWillUnmount(){
	  clearInterval(this.runSlide)
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
