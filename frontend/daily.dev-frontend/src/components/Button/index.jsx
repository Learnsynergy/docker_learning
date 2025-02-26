import React from "react";
import "./styles.css";

function Button({ text, onClick, className, icon1, icon2 }) {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {icon1 && <span className="button-icon icon1">{icon1}</span>}
      {icon2 && <span className="button-icon icon2">{icon2}</span>}
      {text}
    </button>
  );
}

export default Button;
