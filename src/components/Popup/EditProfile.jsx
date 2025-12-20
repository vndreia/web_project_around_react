import React from "react";
const EditProfile = ({ isEditPopupOpen, onSubmit }) => {
  return (
    <div className="popup popup-edit-profile">
      {/*Popup para editar perfil*/}
      <div className="popup__container">
        <button className="popup__button-close popup__button-close-profile">
          {/*ClosePopup*/}
        </button>
        <form className="form">
          <h2 className="form__title">Editar perfil</h2>
          <label for="name"></label>
          <input
            type="text"
            className="form__input form__input-type-name"
            placeholder="Nombre"
            id="name"
            minlength="2"
            maxlength="200"
            required
            name="name"
          />
          <span id="name-error" className="popup__error-visible"></span>
          <label for="about"></label>
          <input
            type="text"
            className="form__input form__input-type-about"
            placeholder="Acerca de mí"
            id="about"
            minlength="2"
            maxlength="200"
            required
            name="about"
          />
          <span id="about-error" className="popup__error_visible"></span>
          <button
            disabled
            type="submit"
            className="form__button-save"
            id="edit-profile-btn"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
