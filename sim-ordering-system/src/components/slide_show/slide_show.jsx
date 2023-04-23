import React from 'react'
import "./slide_show.css";
import Banner01 from '../../assets/banner01.webp'
import Banner02 from "../../assets/banner02.webp";
import Banner03 from "../../assets/banner03.webp";
import Banner04 from "../../assets/banner04.webp";

function SlideShow() {
  return (
    <div className="slide-show-main-container">
      <div className="slide-show-wrapper">
        <img src={Banner04} alt="Banner" className="banner-image" />
        <img src={Banner03} alt="Banner" className="banner-image" />
        <img src={Banner02} alt="Banner" className="banner-image" />
        <img src={Banner01} alt="Banner" className="banner-image" />
      
      </div>
    </div>
  );
}

export default SlideShow;