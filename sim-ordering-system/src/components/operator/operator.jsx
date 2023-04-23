import React from "react";
import "./operator.css";
import Jio from "../../assets/jio.webp";
import CheckIcon from "@mui/icons-material/Check";
function Operator() {
    const [active,setActive]=React.useState(false)
  return (
    <div
      className={!active ? "operator-main-container" : "operator-main-container-active"}
      onClick={() => {
        setActive(!active);
      }}
    >
      {active && (
        <div className="selected-icon">
          <CheckIcon fontSize="small" />
        </div>
      )}
      <img
        src={Jio}
        alt="Operator"
        className={!active ? "operator-icon" : "operator-icon-active"}
      />
    </div>
  );
}

export default Operator;
