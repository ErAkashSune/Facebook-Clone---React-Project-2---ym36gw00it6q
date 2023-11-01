import React from "react";
import notification from "../images/notification.png";

function Notification() {
  return (
    <img
    src={notification}
    alt="message"
    style={{
      width: "100%",
      height: "100%",
      marginTop:"75px",
    }}
  />
  );
}

export default Notification;
