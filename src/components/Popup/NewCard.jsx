import React from "react";

const NewCard = () => {
  return (
    <>
      {/*Popup to add a new card*/}
      <div className="popup popup-add-place">
        <div className="popup__container">
          <button className="popup__button-close popup__button-close-place">
            {/*ClosePopup*/}
          </button>
          <form className="form form__add">
            <h2 className="form__title form__title-place">Nuevo lugar</h2>
            <label for="place"></label>
            <input
              type="text"
              className="form__input form__input-place"
              id="place"
              placeholder="Título"
              minlength="2"
              maxlength="40"
              required
              name="place"
            />
            <span id="place-error" className="popup-error_visible"></span>
            <label for="link"></label>
            <input
              type="url"
              className="form__input form__input-link"
              id="link"
              placeholder="Enlace a la imagen"
              minlength="2"
              maxlength="200"
              required
              name="link"
            />
            <span id="link-error" className="popup__error-visible"></span>
            <button
              type="submit"
              className="form__button-save"
              disabled
              id="addCard-btn"
            >
              Crear
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewCard;
