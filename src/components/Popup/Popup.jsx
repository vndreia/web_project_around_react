import React from "react";
import ClosePopup from "../images/close-icon.svg";

const Popup = (props) => {
  const { title, children } = props;
  return (
    <div className="popup">
      {children}
      <div className="popup__container"></div>
    </div>
  );
};

export default Popup;
