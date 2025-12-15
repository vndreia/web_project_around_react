import React from "react";

const ImagePopup = () => {
  return (
    <>
      <div className="popup popup-image">
        <button className="popup__button-close popup__button-close-image"></button>
        <div className="popup-image__content">
          <img src=" " alt="Imagen ampliada" className="popup-image__img" />
        </div>
        <p className="popup-image__caption"></p>
      </div>
    </>
  );
};

export default ImagePopup;
