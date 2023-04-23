import React from 'react'
import "./header.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CallIcon from "@mui/icons-material/Call";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <label className="header-left-text1">Your Safety- Our priority</label>
        <div className="text-icon-wrapper">
          <label className="header-left-text2">Click to know more </label>
          <KeyboardDoubleArrowRightIcon
            sx={{ fontSize: "13px" }}
            style={{ marginLeft: "3px", marginTop: "3px" }}
          />
        </div>
      </div>
      <div className="header-right">
        <div className="text-icon-wrapper">
          <label className="header-right-text1">Customer service </label>
          <ArrowDropDownIcon
            sx={{ fontSize: "23px" }}
            style={{ marginTop: "2px" }}
          />
        </div>
        <div className="text-icon-wrapper">
          <CallIcon
            sx={{ fontSize: "13px" }}
            style={{ marginRight: "2px", marginTop: "1px" }}
          />
          <label className="header-right-text2">
            <span className="header-right-text2-no">+94 11 488 5487</span>{" "}
            <span className="header-right-text2-time">
              {" "}
              (10 AM - 6 PM, 7 Days)
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header