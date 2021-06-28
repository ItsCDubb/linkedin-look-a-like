import React from "react";
import "./InputButton.css";

function InputOption({ color, Icon, title }) {
  return (
    <div className="input-option">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
