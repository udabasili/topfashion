import React from 'react';


const SlideCard = (props) => {  
  const {title, subtext, image} = props;

  return (
    <div>
      <div className="slide">
        <div 
          className="slide__image"  style={{
            backgroundImage: `url(${image})`}}></div>
        <div className="slide__filter"></div>

      </div>

    </div>

  );
};


export default SlideCard;
