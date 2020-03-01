import React from 'react';


const SlideCard = (props) => {  
  const {title, subtext, image} = props;

  return (
    <div>
      <div className="slide">
        <div 
          className="slide__image"  style={{
            backgroundImage: `url(${image}), url(${image})`}}></div>
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


export default SlideCard;
