import React from "react";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import SmsIcon from "@material-ui/icons/Sms";
import HeaderLinks from "./HeaderLinks/HeaderLinks";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <LocationSearchingIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderLinks Icon={HomeIcon} title="Home" />
        <HeaderLinks Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderLinks Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderLinks Icon={SmsIcon} title="Messaging" />
        <HeaderLinks Icon={NotificationsIcon} title="Notifications" />
        <HeaderLinks
          avatar="https://en.gravatar.com/userimage/159667732/1ccb5efa49b35757360abba032ecb757.jpg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
