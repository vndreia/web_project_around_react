import React from "react";

export const RemoveCard = () => {
  return (
    <>
      {/*Popup para eliminar una card */}
      <div className="popup popup-delete-card">
        <div className="popup__container">
          <button className="popup__button-close popup__button-close-delete-card"></button>
          <div className="form form__delete-card">
            <h2 className="form__title form__title-delete-card">
              ¿Estás seguro/a?
            </h2>
            <button
              className="form__button-save form__button-delete"
              id="deleteCard-btn"
            >
              Sí
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
