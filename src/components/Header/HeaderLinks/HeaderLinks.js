import React from "react";
import { Avatar } from "@material-ui/core";
import "./HeaderLinks.css";

function HeaderLinks({ avatar, Icon, title }) {
  return (
    <div className="header-links">
      {Icon && <Icon className="header-links__icon" />}
      {avatar && <Avatar className="header-links__icon" src={avatar} />}
      <h3 className="header-links__title">{title}</h3>
    </div>
  );
}

export default HeaderLinks;
