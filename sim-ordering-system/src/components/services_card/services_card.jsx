import React from "react";
import "./services_card.css";
import Icon1 from "../../assets/icon01.png";
import Airtel from "../../assets/airtel.png";
import Jio from "../../assets/jio.webp";
import Unnamed from "../../assets/unnamed.webp";

function ServicesCard() {
  return (
    <div className="service-card-container">
      <img src={Icon1} alt="Icon" className="service-card-main-icon" />
      <div className="title-wrapper">
        <label>BROADBAND</label>
      </div>
      <div className="icon-wrapper">
        <img src={Airtel} alt="Airtel" className="card-sub-icon" />
        <img src={Jio} alt="Jio" className="card-sub-icon" />
        <img src={Unnamed} alt="Unnamed" className="card-sub-icon" />
        <img src={Airtel} alt="Airtel" className="card-sub-icon" />
        <img src={Jio} alt="Jio" className="card-sub-icon" />
      </div>
    </div>
  );
}

export default ServicesCard;
