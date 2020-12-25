import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for details for each slide
 * @param {*} props 
 */

const SlideCard = ({title, subtext, image}) => {  

  return (
    <div>
      <div className="slide">
        <div 
          className="slide__image"  style={{
          backgroundImage: `url(${image}), url(${image})`}}>
        </div>
        <div className="slide__text-box">
          <h1 className="header-primary">
            <span className="header-primary-main">{title}</span>
            <span className="header-primary-sub">{subtext}</span>
            </h1>

        </div>
      </div>
    </div>

  );
};

SlideCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtext: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}

export default SlideCard;

