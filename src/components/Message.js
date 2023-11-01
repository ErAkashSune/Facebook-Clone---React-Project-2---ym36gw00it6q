import React from "react";
import massage from "../images/massage.PNG";

function Message() {
  return (
    <img
    src={massage}
    alt="message"
    style={{
      width: "100%",
      height: "100%",
      marginTop:"75px",
    }}
  />
  );
}

export default Message;
