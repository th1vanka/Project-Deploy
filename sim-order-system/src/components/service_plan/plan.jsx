import React from "react";
import "./plan.css";
import Jio from "../../assets/jio.webp";
import Benefit01 from "../../assets/benifit01.webp";
import Benefit02 from "../../assets/benifit02.webp";
import Benefit03 from "../../assets/benifit03.webp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import Button from "../button/button";

function Plan() {
  return (
    <div className="plan-main-container">
      <div className="plan-section-01">
        <div className="plan-sub-section-01">
          <img src={Jio} alt="Logo" className="plan-sub-section-icon" />
          <label>2.5GB / Day</label>
        </div>
        <label>$450</label>
      </div>
      <div className="plan-section-02">
        <label>Truly Unlimited</label>
        <label>Plan Price</label>
      </div>
      <div className="plan-section-03">
        <div className="plan-sub-section-02">
          <CalendarMonthSharpIcon sx={{ fontSize: "18px" }} />
          <label>28 Days</label>
        </div>
        <Button type="filled" text="Explore" />
      </div>
      <br />
      <hr className="separate-line" />
      <div className="plan-section-04">
        <label>Benefits: </label>
        <img src={Benefit01} alt="Benefit" className="benefits-icon" />
        <img src={Benefit02} alt="Benefit" className="benefits-icon" />
        <img src={Benefit03} alt="Benefit" className="benefits-icon" />
      </div>
    </div>
  );
}

export default Plan;
