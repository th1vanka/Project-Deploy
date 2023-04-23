import React from "react";
import "./nav_bar.css";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Button from "../button/button";
import Header from "../header/header";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
function Navigation() {
  return (
    <>
      <Header />
      <div className="nav-bar-container">
        <div className="nav-logo-wrapper">
          <img src={Logo} width="90px" alt="logo" />
          <label className="nav-label">Delivering to Sri Lanka</label>
        </div>
        <div className="nav-actions-wrapper">
          <Button text="FOR BUSINESS" />
          <Button text="CART" />
          <Button text="LOGIN" />
        </div>
      </div>
      <div className="mob-nav-bar-main-container">
        <div className="mob-nav-bar-container">
          <MenuOutlinedIcon />
          <div className="mob-nav-logo-wrapper">
            <img src={Logo} width="90px" alt="logo" />
          </div>
          <div className="mob-nav-actions-wrapper">
            <ShoppingCartOutlinedIcon />
            <PersonOutlineOutlinedIcon />
          </div>
        </div>
        <div className="mob-nav-bar-location-container">
          <RoomOutlinedIcon
            sx={{ fontSize: "24px" }}
            style={{ marginTop: "2px", marginRight: "3px" }}
          />
          <label>
            Delivering to -{" "}
            <span className="mob-nav-bar-location-text">Sri Lanka</span>
          </label>
          <ArrowDropDownIcon sx={{ fontSize: "25px" }} />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
