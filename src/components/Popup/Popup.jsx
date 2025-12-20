import React from "react";

const Popup = (props) => {
  const { children, isOpen } = props;
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      {children}
      <div className="popup__container"></div>
    </div>
  );
};

export default Popup;
