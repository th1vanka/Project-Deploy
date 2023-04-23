import React from 'react'
import "./button.css";

function Button({text,type,onClick}) {
  return (
    <button
      onClick={onClick}
      className={type === "filled" ?"filled": "outlined"}
    >
      {text?text:"Button"}
    </button>
  );
}

export default Button